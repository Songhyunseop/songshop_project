import Link from 'next/link';
import styled from 'node_modules/@emotion/styled';

export const Header_Wrapper = styled.header`
  width: 100%;
  z-index: 999;
  transition: all 0.9s ease;
  position: ${(props) => (props.isScrolled ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  background-color: ${(props) => (props.isScrolled ? 'white' : 'none')};
  transform: ${(props) => (props.isScrolled ? 'translateY(px)' : 'auto')};
`;

export const Header_Main = styled.section`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  padding: 0 3%;
`;

export const Main_Left = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  min-width: 300px;
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
  width: 45%;
  /* min-width: 680px; */
  display: flex;
  align-items: center;
`;

export const Main_Title = styled.p``;

export const Styled_TitleLink = styled(Link)`
  text-decoration-line: none;
  color: #544d4e;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  /* margin-right: 1px; */
`;

export const Search_Box = styled.input`
  /* width: 17vw; */
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const Basket = styled.img`
  width: 30px;
  height: 30px;
  padding-bottom: 0.08rem;
  margin-left: 1rem;
`;

export const Nav_Bar = styled.nav`
  width: 100%;
  ul {
    width: 100%;
    min-height: 40px;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    cursor: pointer;
    padding: 0 2%;

    :nth-of-type(5) {
      flex: 1;
    }
  }
`;
