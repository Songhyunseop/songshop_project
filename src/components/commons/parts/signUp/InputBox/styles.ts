import { InputProps } from '@/commons/types/signUp_type';
import styled from '@emotion/styled';

export const Input_Container = styled.article`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 1rem;
  border-top: 1px solid #d2d2d2;
`;

export const Input_Detail = styled.div`
  width: 100%;
  /* 에러 메시지 출력 칸 대비 높이값 조정 */
  height: calc(100% - 35px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.8rem;
`;

export const Input_Title = styled.span`
  font-size: 1.3rem;
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
  height: 100%;
`;

export const PhoneNumber_Input_Container = styled.article`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Error_Msg = styled.span`
  width: 45%;
  align-self: flex-end;
  margin-top: 0.2rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: red;
`;
