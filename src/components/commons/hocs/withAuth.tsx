import supabase from '@/commons/utils/supabase/client';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export default function WithAuth(Component: ComponentType) {
  const func = <P extends object>(props: P) => {
    const router = useRouter();
    const supabaseClient = supabase();

    useEffect(() => {
      const getUser = async () => {
        try {
          const { data, error } = await supabaseClient.auth.getSession();

          if (error) throw error;

          if (data?.session) {
            alert('이미 로그인 하셨습니다');
            router.push('/');
          }
        } catch (error) {
          if (error instanceof Error) {
            error.message ===
              `Cannot read properties of undefined (reading 'user')`;
            return;
          }

          throw error;
        }
      };

      getUser();
    }, []);

    return <Component {...props} />;
  };

  return func;
}
