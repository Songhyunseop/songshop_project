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
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 8rem;
`;

export const Button_Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const Add_Button = styled.button`
  cursor: pointer;
  width: 90px;
  height: 30px;
  font-size: 1.1rem;
  font-weight: 500;
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
  background-color: rgba(64, 50, 52, 0.2);
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: #454242;
`;

export const Table_List = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
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
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d2d2d2;
  padding: 10px 0;
  font-size: 1.3rem;
`;

export const Item_Info = styled.div`
  font-size: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: 25px;
  flex-basis: 80px;
  font-size: 1.2rem;
  font-weight: 400;

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
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    > div > span {
      font-weight: 400;
      font-size: 1rem;
    }

    > div > span:nth-of-type(1) {
      width: 17px;
      height: 17px;
      font-size: 1rem;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      background-color: #403234;
      color: white;
    }

    > div > span:nth-of-type(2) {
      letter-spacing: 0.1rem;
    }
  }

  &:nth-of-type(6) {
    height: 60px;
    flex-grow: 0.5;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Item_Img = styled.img`
  width: 70%;
  height: 90%;
  object-fit: cover;
`;

export const Edit_Btn = styled.button`
  width: 80px;
  height: 25px;
  border: none;
  font-size: 0.95rem;
  font-weight: 400;
  color: #f7f3f5;
  background-color: #e2c2b3;
`;

export const Delete_Btn = styled.button`
  width: 80px;
  height: 25px;
  border: none;
  font-size: 0.95rem;
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

export const PayInfo = styled.span`
  font-weight: 400;
  margin-right: 1%;
`;

export const Total_Price = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;

export const Pay_Button = styled.button`
  cursor: pointer;
  width: 13%;
  padding: 10px;
  font-size: 1.5vw;
  font-weight: 500;
  letter-spacing: 0.08rem;
  color: #f7f3f5;
  margin-left: 5%;
  border: none;
  background-color: #e2c2b3;
`;
