import supabase from '@/commons/utils/supabase/client';
import { useMutation } from '@tanstack/react-query';

const supabaseClient = supabase();

export const createProduct = async (userInputData) => {
  const { data, error } = await supabaseClient
    .from('product')
    .insert([userInputData])
    .select();

  return { data, error };
};

export const useMutationCreateProduct = () =>
  useMutation({ mutationFn: createProduct });
