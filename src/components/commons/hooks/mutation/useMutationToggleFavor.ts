import supabase from '@/commons/utils/supabase/client';
import { useMutation } from '@tanstack/react-query';

const supabaseClient = supabase();

const toggleFavor = async ({ product, user }) => {
  try {
    const { data, error } = await supabaseClient
      .from('likes')
      .delete()
      .eq('user_id', user)
      .eq('product_id', product)
      .single();

    if (error) {
      if (error.details === 'The result contains 0 rows') {
        const { data, error } = await supabaseClient
          .from('likes')
          .insert([{ user_id: user, product_id: product }])
          .select();
      }
    } else throw error;

    // if (data === null) {
    //   const { data: insertData, error } = await supabaseClient
    //     .from('likes')
    //     .insert([{ user_id: user, product_id: product }]);

    //   console.log(insertData, 'data');
    // }
    // if (error) throw error;

    console.log(data, 'data');
  } catch (error) {
    console.log(error);
  }

  //   return data;
};

export const useToggleFavor = () => useMutation({ mutationFn: toggleFavor });
