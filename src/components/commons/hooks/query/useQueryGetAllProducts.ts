import supabase from '@/commons/utils/supabase/client';

const supabaseClient = supabase();

export const getDataList = async () => {
  const { data: productData, error } = await supabaseClient
    .from('product')
    .select('*, users(id,*)');

  return { productData, error };
};
