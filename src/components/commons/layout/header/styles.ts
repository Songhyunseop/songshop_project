import Link from 'next/link';
import styled from 'node_modules/@emotion/styled';

export const Header_Wrapper = styled.header`
  /* background-color: white; */
`;

export const Header_Main = styled.section`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  padding: 0 3%;
  border: 3px solid red;
`;

export const Main_Left = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  min-width: 550px;
`;

export const User_SelectNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Nav_List = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  /* justify-content: center; */
`;

export const NavLi = styled.li`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  padding: 0 3%;
`;

export const Styled_Link = styled(Link)`
  text-decoration-line: none;
  color: black;
  transition: all 0.3s ease-out;
  font-size: 1.3rem;
  font-weight: 300;

  &:hover {
    color: #e2c2b3;
  }
  /* position: relative; */
  /* width: 200px;
  font-size: 1.65rem;
  font-weight: 300;
  text-decoration-line: none;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease-out;
  border: 2px solid red;

  &:hover {
    color: #e2c2b3;
  } */
`;

export const Main_Right = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid green;
`;

export const Main_Title = styled.p``;

export const Styled_TitleLink = styled(Link)`
  text-decoration-line: none;
  color: #544d4e;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  padding-top: 0.3rem;
  margin-right: 1.5rem;
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
