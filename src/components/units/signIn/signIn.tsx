import Button from '@/components/commons/parts/signIn/buttons/buttons';
import {
  loginOption,
  googleLoginOption,
  naverLoginOption,
} from '@/components/commons/constants/constants';

import * as S from './styles';

export default function Login() {
  return (
    <S.Main>
      <S.Title>LOGIN</S.Title>
      <S.Input_Section>
        <S.Login_Input />
        <S.Login_Input />
      </S.Input_Section>
      <Button options={loginOption} />
      <S.User_Contact_Section>
        <S.Contact_Info>ID찾기</S.Contact_Info>
        <S.Contact_Info>회원가입</S.Contact_Info>
      </S.User_Contact_Section>
      <Button options={googleLoginOption} />
      <Button options={naverLoginOption} />
    </S.Main>
  );
}
