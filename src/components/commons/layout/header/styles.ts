import styled from 'node_modules/@emotion/styled';

const getPositon = ({ isScrolled, isChangeStylePath }) => {
  if (isScrolled) return 'fixed';
  if (isChangeStylePath) return 'fixed';
  return 'absolute';
};

const getBackgroudColor = ({ isScrolled, isChangeStylePath }) => {
  if (isScrolled) return 'white';
  if (isChangeStylePath) return 'none';
  return 'white';
};

export const Header_Wrapper = styled.header`
  width: 100%;
  z-index: 999;
  transition: all 0.9s ease;
  position: ${(props) => getPositon(props)};
  top: 0;
  left: 0;
  background-color: ${(props) => getBackgroudColor(props)};
  transform: ${(props) => (props.isScrolled ? 'translateY(px)' : 'auto')};

  border-bottom: 1px solid #d8d8d8;
`;

export const Header_Main = styled.section`
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
`;

export const Main_Left = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  min-width: 300px;
`;

export const Main_Right = styled.div`
  width: 45%;
  /* min-width: 680px; */
  display: flex;
  align-items: center;
`;

export const Main_Title = styled.p``;

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
