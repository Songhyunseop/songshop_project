import supabase from '@/commons/utils/supabase/client';
import { AuthError } from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';

const supabaseClient = supabase();

const signUp = async ({ data, subData: { phoneNum, userType } }) => {
  try {
    const { data: signUpData, error } = await supabaseClient.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          user_name: data.name,
          user_nickname: data.nickName,
          user_phone: phoneNum,
          user_address: data.address,
          user_type: userType,
        },
      },
    });

    if (error) throw error;

    return { signUpData, error };
  } catch (error) {
    if (error instanceof AuthError) throw new Error(error.message);
  }
};

export const useSignUp = () => useMutation({ mutationFn: signUp });
