import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 30rem; */
  /* padding-top: 10rem; */
  border: 3px solid blue;

  & :nth-of-type(6) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

export const SignUpForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUp_Button = styled.button`
  width: 17%;
  height: 40px;
  font-size: 1rem;
  font-weight: 400;
  color: #f7f3f5;
  letter-spacing: 0.08rem;
  margin-top: 4rem;
  border: none;
  background-color: #e2c2b3;
`;
