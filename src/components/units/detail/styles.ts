import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailWrapper_Top = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: flex-start;
  gap: 5%;
`;

export const Product_Pic_Carousel = styled.div`
  width: 45%;
  height: 80%;
  background-color: gray;
`;

export const Details = styled.section`
  width: 55%;
  background-color: rgba(226, 194, 179, 0.12);
  border-radius: 5px;
  padding: 1.9rem;
`;

export const Product_Name = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Check_Total = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  margin-bottom: 3rem;
  font-size: 4rem;
`;

export const Index = styled.div`
  width: 17%;
  min-width: 110px;
  font-weight: 300;
  margin-right: 10rem;
`;

export const Info_Contents = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #403234;
`;

export const BtnWrapper = styled.section`
  display: flex;
  gap: 3rem;
  height: 50px;
`;

export const Button_Buy = styled.button`
  width: 80%;
  height: 100%;
  border: none;
  color: #f7f3f5;
  font-size: 2rem;
  font-weight: 600;
  background-color: #e2c2b3;
`;

export const Button_Bascket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  border: none;
  background-color: #687477;
`;

export const DetailWrapper_Bottom = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1.5px solid #d2d2d2;
`;

// export const Select_Nav = styled.nav`
//   margin-top: 6rem;
//   margin-bottom: 15rem;
// `;

// export const Nav_List = styled.ul`
//   list-style: none;
//   display: flex;
// `;

// export const Nav_Item = styled.li`
//   font-size: 2.4rem;
//   display: flex;
//   align-items: center;

//   &:not(:nth-child(3)):after {
//     content: '|';
//     margin: 0 1rem;
//   }

//   & :hover {
//     color: #e2c2b3;
//   }
//   cursor: pointer;
// `;

// export const Nav_Content = styled.span`
//   font-size: 2.1rem;
// `;

// export const Count = styled.div`
//   width: 25px;
//   height: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #f7f3f5;
//   font-size: 1.6rem;
//   font-weight: 500;
//   margin-left: 5px;
//   border-radius: 5px;
//   background-color: rgba(160, 160, 160, 0.8);
// `;
