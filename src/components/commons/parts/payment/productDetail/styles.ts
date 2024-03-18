import styled from '@emotion/styled';

export const OrderItem = styled.section`
  width: 100%;
  height: 160px;
  border-bottom: 1px solid #d2d2d2;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  :nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const Item_Info = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;

export const Img_Container = styled.div`
  padding: 1rem;
`;

export const Item_Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Item_Contents = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  margin-left: 2rem;
`;

export const Item_Name = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Item_Option = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  font-weight: 300;
`;

export const Option_Size = styled.span``;

export const Option_Color = styled.span``;

export const Option_Count = styled.span``;

export const Item_Price = styled.span`
  font-size: 2rem;
  font-weight: 400;
`;

export const Cancel_Btn = styled.div`
  width: 35px;
  height: 35px;
  font-size: 3rem;
  font-weight: 400;
  border-radius: 3px;
  text-align: center;
  background-color: #d2d2d2;
  padding-top: 1px;
`;
