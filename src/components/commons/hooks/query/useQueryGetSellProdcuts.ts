import supabase from '@/commons/utils/supabase/client';
import { useQuery } from '@tanstack/react-query';

const supabaseClient = supabase();

const getDatalist = async (id) => {
  const { data, error } = await supabaseClient
    .from('product')
    .select('*')
    .eq('user_id', id);

  return { data, error };
};

export const getAllSellProduct = (id) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getDatalist(id),
    enabled: !!id,
  });
};
