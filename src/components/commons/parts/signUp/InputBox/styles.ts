import { InputProps } from '@/commons/types/signUp_type';
import styled from '@emotion/styled';

export const Input_Container = styled.article`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-top: 1px solid #d2d2d2;
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
  height: 50%;
`;

export const PhoneNumber_Input_Container = styled.article`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
