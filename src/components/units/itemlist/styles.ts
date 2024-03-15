import { ItemsProps, PageProps } from '@/commons/types/list_type';
import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 2.5rem;
`;

export const Category_Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  /* letter-spacing: 0.08rem; */
  margin-bottom: 45px;
`;

export const Category_Nav = styled.nav``;

export const Category = styled.span`
  position: relative;
  margin: 0px 7px;
  font-size: 1.8rem;
  transition: all 0.3s ease-out;
  cursor: pointer;

  &::after {
    content: ' ';
    position: absolute;
    background-color: #e2c2b3;
    width: 100%;
    height: 3px;
    left: 0;
    bottom: -3px;
    transition: all 0.5s ease;
    transform: scaleX(0);
  }

  &:hover {
    color: #e2c2b3;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const BestItem_Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 60px;
  border: 2px solid red;
`;

export const Items = styled.article<ItemsProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isAll
      ? 'repeat(4, minmax(150px, 1fr));'
      : 'repeat(auto-fit, minmax(150px, 1fr));'};
  grid-gap: 1.5rem;
  border: 3px solid blue;
`;

export const Item_Title = styled.span`
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const AllItem_Section = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 140px;
`;

export const Pagination = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 70px;
  margin-bottom: 70px;
`;

export const Page_Number = styled.span<PageProps>`
  margin: 0px 15px;
  font-size: 1.8rem;
  color: ${(props) => (props.index === props.currentPage ? '#E2C2B3' : 'none')};
  cursor: pointer;
`;
