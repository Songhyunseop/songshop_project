import { InputProps } from '@/commons/types/signUp_type';
import styled from '@emotion/styled';

export const Input_Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  border-top: 1px solid #d2d2d2;
`;

export const Input_Detail = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Input_Title = styled.span`
  font-size: 2rem;
  font-weight: 400;
  position: relative;

  &::after {
    content: '*';
    margin-left: 0.5rem;
    display: inline-block;
    color: #315ac4;
    position: absolute;
    top: 0.4rem;
  }
`;

export const SignUp_Input = styled.input<InputProps>`
  width: ${(props) => (props.isPhoneNumInput ? '30%' : '45%')};
  height: 80%;
`;

export const PhoneNumber_Input_Container = styled.article`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error_Msg = styled.p`
  width: 45%;
  align-self: flex-end;
  font-size: 1.25rem;
  font-weight: 400;
  color: red;
  margin-bottom: 0.8rem;
`;
