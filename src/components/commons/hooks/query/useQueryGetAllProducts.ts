import supabase from '@/commons/utils/supabase/client';

const supabaseClient = supabase();

// 모든 아이템 조회 API
export const getDataList = async (limitNum) => {
  try {
    const { data: dataList, error } = await supabaseClient
      .from('product')
      .select('*, users(id,*), likes(user_id, product_id)')
      .limit(limitNum);

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

const pageSize = 4;

export const getBestProduct = async (page) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  try {
    const { data: bestProduct, error } = await supabaseClient
      .from('product')
      .select('*, users(id,*), likes(user_id, product_id)')
      .eq('is_best', true)
      .limit(4);

    return { bestProduct, error };
  } catch (error) {
    console.log(error);
  }
};
