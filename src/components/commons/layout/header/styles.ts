import Link from 'next/link';
import styled from 'node_modules/@emotion/styled';

export const Header_Wrapper = styled.header`
  width: 100%;
  background-color: white;
`;

export const Header_Main = styled.section`
  height: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
`;

export const Main_Left = styled.div`
  width: 35%;
`;

export const User_SelectNav = styled.nav`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Nav_List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  width: 100%;
`;

export const Styled_Link = styled(Link)`
  position: relative;
  font-size: 2rem;
  font-weight: 200;
  text-decoration-line: none;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    color: #e2c2b3;
  }
`;

export const Main_Right = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`;

export const Main_Title = styled.p``;

export const Styled_TitleLink = styled(Link)`
  text-decoration-line: none;
  color: #544d4e;
  font-size: 4.5rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  padding-top: 0.3rem;
`;

export const Search_Box = styled.input`
  max-width: 260px;
  width: 100%;
  height: 30px;
`;

export const Basket = styled.img`
  width: 30px;
  height: 30px;
  padding-bottom: 0.08rem;
  margin-left: 1rem;
`;

export const Nav_Bar = styled.nav``;
