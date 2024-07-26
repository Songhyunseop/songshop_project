import { UserState } from '@/commons/libraries/atom';
import supabase from '@/commons/utils/supabase/client';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

export default function AuthProvier() {
  const supabaseClient = supabase();
  const setUser = useSetRecoilState(UserState);

  // user State handling
  useEffect(() => {
    const { data } = supabaseClient.auth.onAuthStateChange((event, session) => {
      if ((event === 'INITIAL_SESSION' || event === 'SIGNED_IN') && session) {
        const { id, created_at, updated_at, user_metadata, last_sign_in_at } =
          session.user;

        setUser({ id, created_at, updated_at, user_metadata, last_sign_in_at });
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      } else if (event === 'PASSWORD_RECOVERY') {
        // handle password recovery event
      } else if (event === 'TOKEN_REFRESHED') {
        // handle token refreshed event
      } else if (event === 'USER_UPDATED') {
        // handle user updated event
      }
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return <></>;
}
