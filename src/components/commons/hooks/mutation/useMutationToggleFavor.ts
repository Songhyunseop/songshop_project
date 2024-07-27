import supabase from '@/commons/utils/supabase/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const supabaseClient = supabase();

const toggleFavor = async ({ product, user }) => {
  try {
    const { data, error, count } = await supabaseClient
      .from('likes')
      .delete()
      .eq('user_id', user)
      .eq('product_id', product)
      .select('*', { count: 'exact' });

    if (data?.length === 0) throw new Error('NO DATA');
    else throw new Error(error?.message);
  } catch (error) {
    if (error.message === 'NO DATA') {
      const setLiked = async () => {
        const { data, error } = await supabaseClient
          .from('likes')
          .insert([{ user_id: user, product_id: product }])
          .select();
        return { data, error };
      };
      await setLiked();
    }
  }
};

export const useToggleFavor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleFavor,
    onMutate: async (toggleVariable) => {
      await queryClient.cancelQueries({ queryKey: ['product'] });
      const perviousData = queryClient.getQueryData(['product']);

      queryClient.setQueryData(['product'], (old) => {
        const selectProduct = old.productData.find(
          (product) => product.id === toggleVariable.product
        );
        selectProduct.isLiked = !selectProduct.isLiked;
      });

      // 실패를 가정해서 변경 이전의 데이터값을 반환 (onError 발생 시 이 return 값 활용)
      return { perviousData };
    },

    onError: (_error, newValue, context) => {
      queryClient.setQueryData(['product', context?.perviousData]);
    },

    // 이 부분 때문에 product쿼리 key로 가진 모든 컴포넌트 리렌더링됨 (fix 필요!)
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['product'] });
    },
  });
};
