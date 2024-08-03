import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid blue;

  & :nth-of-type(6) {
    border-bottom: 1px solid #d2d2d2;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 5%;
`;

export const SignUp_Index = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(64, 50, 52, 1);
  margin-bottom: 3%;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Select_Section = styled.section`
  width: 100%;
  margin-top: 5%;
`;

export const UserType_Seciton = styled.div`
  display: flex;
  gap: 5%;
  width: 100%;
`;

export const UserType = styled.div<{ isSelect: boolean }>`
  cursor: pointer;
  border-radius: 10px;
  border: ${({ isSelect }) =>
    isSelect ? '2px solid gold' : '2px solid black'};
  width: 50%;
  height: 150px;
`;

export const SignUp_Button = styled.button`
  width: 30%;
  height: 50px;
  font-size: 1.3rem;
  font-weight: 500;
  color: #f7f3f5;
  letter-spacing: 0.08rem;
  margin-top: 4rem;
  border: none;
  background-color: #e2c2b3;
`;
