import { InputProps } from '@/commons/types/signUp_type';
import styled from '@emotion/styled';

export const Input_Container = styled.article`
  width: 650px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 0 0 0;
`;

export const Input_Detail = styled.div`
  width: 100%;
  height: 70%;
  /* 에러 메시지 출력 칸 대비 높이값 조정 */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input_Title = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  min-width: 150px;
  width: 20%;
`;

export const SignUp_Input = styled.input<InputProps>`
  width: ${(props) => (props.isPhoneNumInput ? '30%' : '55%')};
  height: 100%;
  border-radius: 3px;
  padding-left: 0.5rem;
  border: 1px solid lightgray;
`;

export const PhoneNumber_Input_Container = styled.article`
  width: 55%;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Error_Msg = styled.span`
  width: 100%;
  height: 40px;
  align-self: flex-end;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: red;
`;

export const ButtonContainer = styled.div`
  width: 80px;
  height: 100%;
  margin-right: 5%;
`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: white;
  font-weight: 400;
  background-color: #403234;
`;
