import Button from '@/components/commons/parts/signIn/buttons/buttons';
import * as S from './styles';

export default function Login() {
  // input, button height 통일 변수
  console.log('hello world');

  const loginOption = {
    bgColor: '#e2c2b3',
    fontColor: '#F7F3F5',
    content: '로그인',
    icon: 'none',
  };

  const googleLoginOption = {
    bgColor: '#f7f3f5',
    fontColor: '#000000',
    content: 'Google로 로그인',
    icon: 'google',
  };

  const naverLoginOption = {
    bgColor: '#2DB400',
    fontColor: '#ffffff',
    content: 'Naver로 로그인',
    icon: 'naver',
  };

  return (
    <S.Main>
      <S.Title>LOGIN</S.Title>
      <S.Input_Section>
        <S.Login_Input />
        <S.Login_Input />
      </S.Input_Section>
      <Button options={loginOption} />
      <S.User_Contact_Section>ID찾기, 회원가입</S.User_Contact_Section>
      <Button options={googleLoginOption} />
      <Button options={naverLoginOption} />
    </S.Main>
  );
}
