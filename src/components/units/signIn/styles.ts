import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  height: 780px;
  min-height: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40rem;
  padding-top: 10rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 6rem;
`;

export const Input_Section = styled.section`
  width: 100%;
  height: 100%;
  max-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const Login_Input = styled.input`
  width: 100%;
  height: 45%;
`;

export const User_Contact_Section = styled.section`
  width: 100%;
  text-align: end;
  padding: 0 0 10% 0;
`;

export const Contact_Info = styled.span`
  font-size: 1.8rem;
  font-weight: 300;

  :nth-child(1)::after {
    content: '|';
    margin: 0 0.8rem;
  }
`;
