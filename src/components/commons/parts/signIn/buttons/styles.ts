import styled from '@emotion/styled';

export const Main = styled.button`
  width: 100%;
  height: calc(110px * (45 / 100)); //받아오는 container 높이값의 45%로 계산
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

export const Content_Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 400;
`;
