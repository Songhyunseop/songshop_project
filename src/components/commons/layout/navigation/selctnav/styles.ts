import { NavContentProps } from '@/commons/types/detail_type';
import styled from '@emotion/styled';

export const Select_Nav = styled.nav`
  margin-top: 6rem;
  margin-bottom: 15rem;
`;

export const Nav_List = styled.ul`
  list-style: none;
  display: flex;
`;

export const Nav_Item = styled.li`
  font-size: 2.4rem;
  display: flex;
  align-items: center;

  cursor: pointer;

  &:not(:nth-child(3)):after {
    content: '|';
    margin: 0 1rem;
  }

  & :hover {
    color: #e2c2b3;
  }
`;

export const Nav_Content = styled.span<NavContentProps>`
  font-size: 2.1rem;
  color: ${(props) => (props.el === props.clickState ? '#e2c2b3' : 'none')};
`;

export const Count = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f3f5;
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 5px;
  border-radius: 5px;
  background-color: rgba(160, 160, 160, 0.8);
`;
