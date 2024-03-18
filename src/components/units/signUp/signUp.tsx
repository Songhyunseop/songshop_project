/* eslint-disable @typescript-eslint/no-unused-vars */
import InputContainer from '@/components/commons/parts/signUp/InputBox/inputBox';
import * as S from './styles';

export default function SignUp() {
  const arr = [
    '아이디',
    '비밀번호',
    '비밀번호 확인',
    '이름',
    '휴대전화',
    'E-MAIL',
  ];

  return (
    <S.Main>
      <S.Title>회원가입</S.Title>
      {arr.map((el, idx) => (
        <InputContainer key={idx} inputName={el} />
      ))}
      <S.SignUp_Button>JOIN</S.SignUp_Button>
    </S.Main>
  );
}
