import supabase from '@/commons/utils/supabase/client';
import { Product } from 'types/databaseCollect.type';
const supabaseClient = supabase();

export const getDatalist = async (id: string) => {
  try {
    const { data, error } = await supabaseClient
      .from('product')
      .select('*')
      .eq('user_id', id)
      .returns<Product>();

    return { data, error };
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
