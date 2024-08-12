import styled from '@emotion/styled';

export const ItemList_Wrapper = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 8rem;
`;

export const Button_Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Add_Button = styled.button`
  width: 90px;
  height: 30px;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  color: #f7f3f5;
  background-color: #e2c2b3;
`;

export const Table_Header = styled.ul`
  width: 100%;
  height: 35px;
  list-style: none;
  display: flex;
  justify-content: center;
  background-color: #e8e8e8;
  border-bottom: 2px solid #d2d2d2;
`;

export const Table_List = styled.li`
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 80px;

  &:nth-of-type(1) {
    flex-grow: 0.5;
  }

  &:nth-of-type(2) {
    flex-grow: 1;
  }

  &:nth-of-type(3) {
    flex-grow: 3;
  }

  &:nth-of-type(4) {
    flex-grow: 1;
  }

  &:nth-of-type(5) {
    flex-grow: 0.5;
  }

  &:nth-of-type(6) {
    flex-grow: 0.5;
  }
`;

export const Items = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  font-size: 1.8rem;
`;

export const Item_Info = styled.div`
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 25px;
  flex-basis: 80px;

  &:nth-of-type(1) {
    flex-grow: 0.5;
  }

  &:nth-of-type(2) {
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }

  &:nth-of-type(3) {
    flex-grow: 3;
  }

  &:nth-of-type(4) {
    flex-grow: 1;
  }

  &:nth-of-type(5) {
    flex-grow: 0.5;
  }

  &:nth-of-type(6) {
    flex-grow: 0.5;
  }
`;

export const Item_Img = styled.img`
  width: 70%;
  height: 90%;
  object-fit: cover;
`;

export const Delete_Btn = styled.button`
  width: 80px;
  height: 25px;
  border: none;
  font-size: 1.2rem;
  font-weight: 400;
  color: #f7f3f5;
  background-color: #403234;
`;

export const Payment_Section = styled.section`
  width: 100%;
  height: 100px;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Total_Price = styled.span`
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Pay_Button = styled.button`
  width: 20%;
  height: 50%;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 0.08rem;
  color: #f7f3f5;
  margin-left: 4rem;
  border: none;
  background-color: #e2c2b3;
`;
