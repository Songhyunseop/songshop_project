import * as S from './styles';
import { useForm } from 'react-hook-form';
import supabase from '@/commons/utils/supabase/client';

import Button from '@/components/commons/parts/signIn/buttons/buttons';
import {
  loginOption,
  googleLoginOption,
  naverLoginOption,
} from '@/commons/constants/constants';
import { AuthApiError } from '@supabase/supabase-js';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  const supabaseClient = supabase();
  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    try {
      const { data: loginData, error } =
        await supabaseClient.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });

      if (error) throw error;

      const userData = await supabaseClient.auth.getUser();
      const { id } = userData.data.user;

      console.log(userData.data.user);
      console.log(id);

      router.push('/');
    } catch (error) {
      if (error instanceof AuthApiError) {
        if (
          error.status === 400 &&
          error.message === 'Invalid login credentials'
        )
          alert('가입되지 않은 유저입니다');
      }
    }
  };

  return (
    <S.Main>
      <S.Title>LOGIN</S.Title>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '40%' }}>
        <S.Input_Section>
          <S.Login_Input
            type='text'
            {...register('email', { required: '빈 칸으로 둘 수 없습니다' })}
          />
          <S.Login_Input
            type='password'
            autoComplete='off'
            {...register('password', { required: '빈 칸으로 둘 수 없습니다' })}
          />
        </S.Input_Section>
        <Button options={loginOption} />
        <S.User_Contact_Section>
          <S.StyledLink href={`/`}>ID찾기</S.StyledLink>
          <S.StyledLink href={`/signUp`}>회원가입</S.StyledLink>
        </S.User_Contact_Section>
        <Button options={googleLoginOption} />
        <Button options={naverLoginOption} />
      </form>
    </S.Main>
  );
}
