import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  height: 780px;
  min-height: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30rem;
  padding-top: 10rem;

  & :nth-of-type(6) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 6rem;
`;

export const SignUpForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

export const SignUp_Button = styled.button`
  width: 17%;
  height: 40px;
  font-size: 1.7rem;
  font-weight: 400;
  color: #f7f3f5;
  letter-spacing: 0.08rem;
  margin-top: 4rem;
  border: none;
  background-color: #e2c2b3;
`;
