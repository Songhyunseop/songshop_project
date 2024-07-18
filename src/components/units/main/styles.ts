import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const Main = styled.main`
  margin: 0 auto;
`;

export const Main_Theme = styled.p`
  position: absolute;
  top: 55%;
  z-index: 99;
  width: 100%;
  font-size: 3.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  transition: all 0.5s ease;
  opacity: 0;
`;

export const VideoWrapper = styled.div`
  position: relative;
  transition: all 0.5 ease;

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 9;
    opacity: 0;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
  }

  :hover::before {
    background-color: gray;
    opacity: 0.5;
  }

  :hover ${Main_Theme} {
    opacity: 1;
  }
`;

export const Styled_ReactPlayer = styled(ReactPlayer)`
  position: relative;
  ::after {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
  video {
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    object-fit: fill;
  }
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
