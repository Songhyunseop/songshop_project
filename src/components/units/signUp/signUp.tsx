/* eslint-disable @typescript-eslint/no-unused-vars */
import InputContainer from '@/components/commons/parts/signUp/InputBox/inputBox';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import supabase from '@/commons/utils/supabase/client';

import * as S from './styles';

export default function SignUp() {
  const supabaseClient = supabase();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    getValues,
  } = useForm({ mode: 'onChange' });

  const SignUpInputDataArr = [
    {
      title: '이름',
      field: 'name',
      type: 'text',
      args: {
        required: '빈 칸으로 둘 수 없습니다',
        pattern: {
          value: /[ㄱ-ㅎㅏ-ㅣ가-힣]/,
          message: '올바르지 않은 형식입니다',
        },
      },
    },
    {
      title: '닉네임',
      field: 'nickName',
      type: 'text',
      args: {
        required: '빈 칸으로 둘 수 없습니다',
        pattern: {
          value: /^[a-zA-Z0-9]+$/,
          message: '올바르지 않은 형식입니다',
        },
      },
    },
    {
      title: 'E-MAIL',
      field: 'email',
      args: {
        required: '빈 칸으로 둘 수 없습니다',
        pattern: {
          value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
          message: '올바르지 않은 형식입니다',
        },
      },
    },
    {
      title: '비밀번호',
      field: 'password',
      type: 'password',
      args: {
        required: '빈 칸으로 둘 수 없습니다',
        minLength: {
          value: 10,
          message: '비밀번호는 최소 10자리 이상입니다',
        },
        pattern: {
          value: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
          message: '최소 1개 이상의 특수문자가 포함되어야 합니다',
        },
      },
    },
    {
      title: '비밀번호 확인',
      field: 'passwordCheck',
      type: 'password',
      args: {
        required: '빈 칸으로 둘 수 없습니다',
        validate: {
          isMatchedPassword: (val: string) => {
            const { password } = getValues();
            return password === val || '비밀번호가 일치하지 않습니다';
          },
        },
      },
    },
    {
      title: '휴대전화',
      filed: 'phone',
    },
  ];

  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    e?.preventDefault();
    // console.log(data);

    const phone = data.phone;
    const phoneNum = phone.map((el) => el).join('-');

    try {
      const { data: signUpData, error } = await supabaseClient.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            user_name: data.name,
            user_nickName: data.nickName,
            user_phone: phoneNum,
          },
        },
      });
      if (error) throw error;
    } catch (error) {
      if (error.message === 'User already registered')
        alert('이미 가입한 사용자입니다');
    }
  };

  return (
    <S.Main>
      <S.Title>회원가입</S.Title>
      <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        {SignUpInputDataArr.map((el, idx) => (
          <InputContainer
            key={idx}
            el={el}
            errors={errors}
            register={register}
            setFocus={setFocus}
          />
        ))}
        <S.SignUp_Button type='submit'>JOIN</S.SignUp_Button>
      </S.SignUpForm>
    </S.Main>
  );
}
