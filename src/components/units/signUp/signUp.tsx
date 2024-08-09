/* eslint-disable @typescript-eslint/no-unused-vars */

import * as S from './styles';
import SignUpInputContainer from './signupContent/inputBox';

import {
  FieldValues,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useRouter } from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '@/commons/libraries/validate/signInSchema';

import { useEffect, useState } from 'react';
import { useSignUp } from '@/components/commons/hooks/mutation/useMutationSignUp';
import { useCustomModal } from '@/components/commons/hooks/custom/useCustomModal/modalhook';
import SearchAddressComponent from '@/components/commons/parts/modal/contents/searchAddress';

export default function SignUp() {
  const router = useRouter();
  const [select, setSelect] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      name: '',
      nickName: '',
      password: '',
      passwordCheck: '',
      phone: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'phone',
  });

  const userTypes = ['seller', 'consumer'];
  const SignUpInputDataArr = [
    {
      title: '이름',
      field: 'name',
      type: 'text',
      placeholder: '이름을 입력하세요',
      readOnly: false,
    },
    {
      title: '닉네임',
      field: 'nickName',
      type: 'text',
      placeholder: '닉네임을 입력하세요',
      readOnly: false,
    },
    {
      title: 'E-MAIL',
      field: 'email',
      placeholder: '이메일을 입력하세요',
      readOnly: false,
    },
    {
      title: '비밀번호',
      field: 'password',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      readOnly: false,
    },
    {
      title: '비밀번호 확인',
      field: 'passwordCheck',
      type: 'password',
      placeholder: '비밀번호를 입력하세요',
      readOnly: false,
    },
    {
      title: '휴대전화',
      field: 'phone',
      readOnly: false,
    },
    {
      title: '주소',
      field: 'address',
      placeholder: '주소를 입력하세요',
      readOnly: true,
    },
  ];

  const { mutateAsync: signUp } = useSignUp();

  const onSubmit: SubmitHandler<FieldValues> = async (data, e) => {
    e?.preventDefault();

    console.log(data);

    // 가입유형 미체크 시
    if (select === '') {
      alert('가입 유형을 선택해주세요');
      return;
    }

    // 휴대폰번호, 가입유형
    const phoneNum = data.phone?.map((el) => el.num).join('');
    const subData = { phoneNum, userType: select };

    try {
      await signUp({ data, subData });

      alert('회원가입이 완료되었습니다 다시 로그인 해주세요');
      router.push('/signIn');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'User already registered')
          alert('이미 가입한 사용자입니다');
      }
    }
  };

  const toggleType = (e) => {
    setSelect(e.target.id);
  };

  const { Modal, handleModal, isOpen } = useCustomModal();

  return (
    <S.Main>
      <Modal>
        <SearchAddressComponent setValue={setValue} handleModal={handleModal} />
      </Modal>
      <S.Title>회원가입</S.Title>
      <S.SignUpForm onSubmit={handleSubmit(onSubmit)}>
        <S.SignUp_Index>User Info</S.SignUp_Index>
        {SignUpInputDataArr.map((el, idx) => (
          <SignUpInputContainer
            key={idx}
            el={el}
            errors={errors}
            register={register}
            setFocus={setFocus}
            handleModal={handleModal}
          />
        ))}
        <S.Select_Section>
          <S.SignUp_Index>User Type</S.SignUp_Index>
          <S.UserType_Seciton>
            {userTypes.map((type) => (
              <S.UserType
                key={type}
                id={type}
                isSelect={select === type}
                onClick={toggleType}
              ></S.UserType>
            ))}
          </S.UserType_Seciton>
        </S.Select_Section>
        <S.SignUp_Button type='submit'>JOIN</S.SignUp_Button>
      </S.SignUpForm>
    </S.Main>
  );
}
