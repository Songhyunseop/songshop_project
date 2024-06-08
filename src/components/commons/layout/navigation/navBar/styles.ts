import Link from 'next/link';
import styled from 'node_modules/@emotion/styled';

export const Nav_Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 12px 3px #d2d2d2;
  background-color: white;
`;

export const CategoryList = styled.ul`
  list-style-type: none;
  width: 800px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Styled_Link = styled(Link)<{ category: string }>`
  text-decoration-line: none;
  font-size: 2.5rem;
  color: ${(props) => (props.category === 'ONSALE' ? 'red' : '#544d4e;')};
`;
