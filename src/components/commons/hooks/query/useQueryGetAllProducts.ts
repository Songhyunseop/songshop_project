import supabase from '@/commons/utils/supabase/client';

const supabaseClient = supabase();

// 모든 아이템 조회 API
export const getDataList = async () => {
  const { data: dataList, error } = await supabaseClient
    .from('product')
    .select('*, users(id,*), likes(user_id, product_id)');

  const session = await supabaseClient.auth.getUser();
  const userId = session.data.user && session.data.user.id;

  const productData = dataList?.map((data) => {
    const isLiked = data.likes.some((like) => like.user_id === userId);

    return { ...data, isLiked };
  });

  return { productData, error };
};
