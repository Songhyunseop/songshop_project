import { IButtonProps } from '@/commons/types/signIn_type';
import styled from '@emotion/styled';

export const Button_Wrapper = styled.button<IButtonProps>`
  width: 100%;
  max-height: 65px;
  height: 60px;
  border-radius: 5px;
  /* height: calc(110px * (45 / 100)); //받아오는 container 높이값의 45%로 계산 */
  letter-spacing: 0.08rem;
  border: none;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  margin-bottom: 2%;
`;

export const Logo_Image = styled.img`
  width: 6%;
  height: 6%;
  margin-right: 0.8rem;
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
`;
