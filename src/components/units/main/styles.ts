import styled from '@emotion/styled';

export const Main = styled.main`
  margin: 0 auto;
  border: 2px solid green;
`;

export const BestItem_Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;

export const Item = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid black;
  background-color: gray;
`;

export const Section_Title = styled.span`
  font-size: 2.6rem;
  font-weight: 300;
  margin-bottom: 40px;
`;

export const Item_Carousel = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 200px;
  border: 2px solid blue;
`;

export const Board_Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  margin-bottom: 200px;
  border: 2px solid red;
`;

export const Board_Box = styled.div`
  height: 400px;
  position: relative;
  z-index: 0;
  transition: all 0.5s ease-in-out;
  opacity: 1;

  &.hovered {
    opacity: 0;
  }

  &:nth-of-type(1):hover {
    margin-right: -60%;
    background-color: black;
    color: white;
    z-index: 1;
  }

  &:nth-of-type(1):hover ~ :nth-of-type(2) {
    opacity: 0;
  }

  &:nth-of-type(2):hover {
    margin-left: -60%;
    background-color: black;
    color: white;
    z-index: 1;
  }
`;

export const NewItem_Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
`;

export const Item_List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-gap: 1.5rem;
  border: 2px solid yellowgreen;
`;

export const Button = styled.button`
  border: none;
  background-color: #e2c2b3;
  margin-top: 70px;
  width: 170px;
  height: 60px;
  color: #f7f3f5;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Banner = styled.div`
  height: 280px;
  margin-top: 300px;
  margin-bottom: 200px;
  background-color: gray;
`;

export const Review_Section = styled.section`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid red;
`;
