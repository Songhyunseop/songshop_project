import styled from '@emotion/styled';
import Link from 'next/link';

export const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 2px solid blue;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;

export const Input_Section = styled.section`
  width: 100%;
  height: 140px;
  max-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const Login_Input = styled.input`
  width: 100%;
  height: 100%;
  max-height: 60px;
`;

export const User_Contact_Section = styled.section`
  width: 100%;
  text-align: end;
  padding: 0 0 10% 0;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 300;
  text-decoration: none;
  color: black;

  :nth-of-type(1)::after {
    content: '|';
    margin: 0 0.8rem;
  }
`;
