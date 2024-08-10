import supabase from '@/commons/utils/supabase/client';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export default function WithAuth(Component: ComponentType) {
  const func = <P extends object>(props: P) => {
    const router = useRouter();
    const supabaseClient = supabase();

    useEffect(() => {
      const getUser = async () => {
        const data = await supabaseClient.auth.getUser();

        if (data.data.user) {
          alert('이미 로그인 하셨습니다');
          router.push('/');
        }
      };

      getUser();
    }, []);

    return <Component {...props} />;
  };

  return func;
}
