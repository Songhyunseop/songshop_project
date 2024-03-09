import styled from '@emotion/styled';

export const Main = styled.main`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Category_Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.08rem;
  margin-bottom: 45px;
`;

export const Category_Nav = styled.nav`
  /* border: 2px solid red; */
`;

export const Category = styled.span`
  position: relative;
  margin: 0px 7px;
  font-size: 1.1rem;
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
  margin-top: 140px;
  border: 5px solid lightgray;
`;

export const Items = styled.article`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 25px;
`;

export const Item_Title = styled.span`
  margin-bottom: 25px;
  font-weight: 400;
`;

export const AllItem_Section = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 140px;
  border: 3px solid lightgray;
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

export const Page_Number = styled.span`
  margin: 0px 15px;
  color: ${(props) => (props.index === props.currentPage ? '#E2C2B3' : 'none')};
  cursor: pointer;
`;
