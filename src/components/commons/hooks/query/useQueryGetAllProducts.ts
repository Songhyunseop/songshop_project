import supabase from '@/commons/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';

const supabaseClient = supabase();

// 모든 아이템 조회 API
const getDataList = async () => {
  try {
    const { data: dataList, error } = await supabaseClient
      .from('product')
      .select('*, users(id,*), likes(user_id, product_id)');

    const session = await supabaseClient.auth.getSession();
    const userId = session.data.session ? session.data.session?.user.id : '';

    const productData = dataList?.map((data) => {
      const isLiked = data.likes.some((like) => like.user_id === userId);

      return { ...data, isLiked };
    });

    return { productData, error };
  } catch (error) {
    console.log(error);
  }
};

export const getAllProduct = () => {
  return useQuery({
    queryKey: ['product'],
    queryFn: getDataList,
  });
};
