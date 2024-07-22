import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
  padding: 0 5%;
`;

export const Item_Section = styled.section`
  position: relative; // 카테고리 nav 표시용 포지셔닝
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10%;
`;

export const ToggleItemBtn = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  font-size: 2rem;
  margin-left: 10px;

  path {
    pointer-events: none;
  }
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
`;

export const NewItem_Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main_ItemsList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px 30px;
`;

export const Review_List = styled.div<{ minWidth: number }>`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: ${({ minWidth }) =>
    `repeat(auto-fit, minmax(${minWidth}px, 1fr))`};
  grid-gap: 50px 20px;
  overflow: hidden;
  border: 10px solid yellowgreen;
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

export const Recommend = styled.article`
  margin-bottom: 15%;
  padding: 0 5% 5% 5%;
  background-color: rgba(64, 50, 52, 0.1);
  display: flex;
  position: relative;
`;

export const Recommend_Left = styled.article`
  width: 55%;
  display: flex;
  flex-direction: column;
`;

export const Rcmd_Left_Top = styled.div`
  min-height: 150px;
  position: relative;
  /* padding-bottom: 15%; */
`;

export const Select_Bar = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: flex-end; */
  padding: 1.5% 0 1.5% 0;
`;

export const Recommend_Title = styled.span`
  position: absolute;
  font-size: 3rem;
  font-weight: 400;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Select_Tag = styled.span<{ selected: number }>`
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 500;
  padding: clamp(5px, 10px, 5%);
  color: ${({ selected }) => (selected ? 'black' : 'lightgray')};
  text-decoration-line: ${({ selected }) => (selected ? 'underline' : 'none')};
`;

export const Rcmd_Left_Bottom = styled.div`
  width: 100%;
`;

export const Progress_Bar = styled.div`
  padding: 10px 0;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 7px;
    background-color: lightgray;
  }
`;

export const Progress_State = styled.div`
  padding: 3px 0;
  position: relative;
  z-index: 1;
  width: 25%;
  overflow: hidden;
  background-color: black;
`;

export const Scroll_Container = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  margin-top: 5%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: appear 0.5s ease-out;
`;

export const Recommend_Right = styled.article`
  width: 45%;
  margin-left: 50px;
  position: relative;
  animation: appear 0.5s ease-out;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 50%;
    }

    100% {
      opacity: 1;
    }
  }

  .animate {
    border: 2px solid red;
  }
`;

export const Review_Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  border: 2px solid red;
`;
