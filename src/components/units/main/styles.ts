import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  ::after {
    content: 'WELCOME TO SONGSHOP';
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    font-size: 1.5rem;
  }
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

export const Main_Body = styled.section`
  margin-top: 10%;
  padding: 0 8%;
`;

export const Item_Section = styled.section`
  position: relative; // 카테고리 nav 표시용 포지셔닝
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20%;
`;

export const Item = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid black;
  background-color: gray;
`;

export const ToggleItemBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  margin-left: 10px;
`;

export const Section_Title = styled.div`
  width: 100%;
  font-size: 2.6rem;
  font-weight: 400;
  margin-bottom: 55px;
  position: relative;
  z-index: 30;
  background-color: white;
  border-bottom: 1px solid #000000;
  transition: all 0.5s ease-in; // DOM 접근으로 margin 값 변경에 대한 트랜지션
`;

export const Category_Bar = styled.nav`
  width: 30%;
  min-width: 450px;
  padding: 5px 5px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0%;
  left: 0%;
  transition: all 0.5s ease-in;
  transform: ${(props) => (props.isNav ? 'translateY(100%)' : 'auto')};

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding-top: 10px;
    font-size: 1.5rem;

    li {
      font-weight: 400;
    }
  }
`;

export const Item_Carousel = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 200px;
  border: 2px solid blue;
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
