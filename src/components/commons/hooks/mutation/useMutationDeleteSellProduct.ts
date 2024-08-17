import supabase from '@/commons/utils/supabase/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product } from 'types/databaseCollect.type';

const supabaseClient = supabase();

const deleteSellProduct = async (id) => {
  try {
    const { data, error } = await supabaseClient
      .from('product')
      .delete()
      .eq('id', id)
      .returns<Product>();

    if (error) throw error;

    return { data, error };
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const useMutationDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSellProduct,
    onSuccess: async () => {
      alert('삭제완료 되었습니다');
      const result = await queryClient.invalidateQueries({
        queryKey: ['product', 'user'],
      });

      return result;
    },
  });
};
