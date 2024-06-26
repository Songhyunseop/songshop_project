import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { ColorPicker } from 'react-color-palette';
import Select from 'react-select';

export const Modal_Header = styled.header`
  position: sticky;
  z-index: 9999;
  top: 0;
  height: 12%;
  color: #f7f3f5;
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background-color: #403234;
`;

export const Modal_Body = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 1fr 1fr 1fr auto 8fr;
  padding: 0.5rem;
`;

export const Body_Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  border-top: 1px solid #b2a0a0;
  border-right: 1px solid #b2a0a0;

  :nth-of-type(7) {
    display: grid;
  }

  :nth-of-type(7) > :nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 7px 0 0 0; */
  }
`;

export const Body_Left = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f7f3f5;
  background-color: #e2c2b3;
  padding: 0.5rem 0 0.5rem 0.8rem;
`;

export const Body_Right = styled.div`
  position: relative;
  width: 100%;
  padding: 0.4rem 0.4rem 0.4rem 0.3rem;
  display: flex;
  align-items: center;
`;

export const AddInput = styled.input<{ detail?: boolean }>`
  width: 50%;
  min-width: 300px;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.2rem;
  font-size: 1rem;
`;

export const DetailText = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.2rem;
  font-size: 1rem;
  resize: none;
`;

export const Upload_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbsImg_Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
`;

export const Upload_Stock_Container = styled.div`
  &:not(:nth-of-type(1)) {
    margin-left: 0.3rem;
  }
`;

export const PreviewImg = styled(Link)`
  position: absolute;
  z-index: 999;
  width: 100px;
  height: 100px;
  padding: 0.9rem;
  margin-top: 0.7rem;
  border: 2px solid rgba(226, 194, 179, 0.7);
  opacity: 0;
  transform: translateY(0);
  transition: transform 0.5s ease, opacity 0.5s ease;
`;

export const uploadStock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8rem;
  padding: 3.2px;
  color: black;
  border-radius: 7px;
  background-color: lightgray;
  border: none;

  &:hover + ${PreviewImg} {
    opacity: 1;
    transform: translateY(-5%);
  }
`;

export const StyledFontawesomeCloseIcon = styled(FontAwesomeIcon)`
  margin-left: 3px;
`;

export const Category_Select = styled(Select)`
  width: 50%;

  & .CategorySelect__option {
    background-color: white;
    color: black;

    :hover {
      background-color: #969696;
    }
  }

  & .CountSelect__menu {
    /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
    z-index: 9999;
    border-radius: 2px;
  }
`;

export const SubCategory_Select = styled(Select)`
  width: 50%;

  & .SubCategorySelect__menu {
    /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
    z-index: 9999;
    border-radius: 2px;
  }
`;

export const addImg = styled.label`
  cursor: pointer;
  width: 100px;
  height: 90%;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #403024;
`;

export const Stocks = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  border-radius: 3px;
  background-color: rgba(64, 50, 52, 0.77);
  border: 2px solid red;
`;

export const Select_Stock = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 2px solid red;
`;

export const Stocks_Info = styled.div`
  font-size: 1rem;
  color: #f7f3f5;

  :not(:nth-of-type(1)) {
    margin-left: 2.5rem;
  }
`;

export const Close = styled.div`
  position: absolute;
  left: 99%;
  transform: translateX(-100%);
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 3px;

  ::before {
    position: absolute;
    left: 50%;
    top: 50%;

    content: ' ';
    width: 2px;
    height: 20px;
    background-color: #f7f3f5;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  ::after {
    color: #f7f3f5;
    position: absolute;
    left: 50%;
    top: 50%;

    content: ' ';
    width: 2px;
    height: 20px;
    background-color: #f7f3f5;

    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const AddItem = styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  color: #f7f3f5;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  background-color: #403234;
`;

export const Size_Select = styled(Select)`
  min-width: 100px;
  width: 25%;
  margin-left: 0.8rem;

  & .SizeSelect__control {
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    border: 1px solid black;
    height: 38px;
    /* min-height: 10px; */
  }

  & .SizeSelect__menu {
    border-radius: 2px;
  }

  & .SizeSelect__option {
    background-color: white;

    :hover {
      background-color: #969696;
    }
  }
`;

export const Count_Select = styled(Select)`
  min-width: 100px;
  width: 25%;
  margin-left: 0.8rem;
  border: 2px solid blue;

  & .CountSelect__control {
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    height: 38px;
    /* min-height: 10px; */
    border: 1px solid black;
  }

  & .CountSelect__menu {
    /* 아래의 editor에 가려짐 방지를 위해 zIndex 값 부여 */
    z-index: 9999;
    border-radius: 2px;
  }

  & .CountSelect__menu-list {
    z-index: 999;
    border: 2px solid red;
    max-height: 200px;
    overflow-y: auto;
  }

  & .CountSelect__option {
    background-color: white;
    color: black;

    :hover {
      background-color: #969696;
    }
  }
`;

export const Color_PickBox = styled.div`
  position: relative;
  display: flex;
  margin-left: 0.5rem;
  /* max-width: 150px; */
  min-width: 90px;
  width: 25%;
  border: 2px solid gold;
`;

export const ColorsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const Colors = styled.div<{ color: string }>`
  min-width: 25px;
  min-height: 25px;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 0.3rem;
  background-color: ${(props) => props.color};
`;

export const Color_PickButton = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 25px;
  min-height: 25px;
  border-radius: 3px;
  margin-right: 10px;
  background-color: #d9d9d9;

  ::before {
    position: absolute;
    left: 50%;
    top: 50%;

    content: ' ';
    width: 2px;
    height: 15px;
    background-color: #9d9d9d;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  ::after {
    position: absolute;
    left: 50%;
    top: 50%;

    content: ' ';
    width: 2px;
    height: 15px;
    background-color: #9d9d9d;

    transform: translate(-50%, -50%);
  }
`;

export const Custom_Color_Layout = styled.div`
  position: absolute;
  top: 100%;
  z-index: 9999;
  width: 20%;
  min-width: 200px;
  height: 35%;
  min-height: 250px;
  margin-top: 0.2rem;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: rgb(64, 50, 52, 0.75); // 색상 선택 박스 테두리
  & .rcp-saturation {
    border-radius: 3px;
  }
`;

export const ColorBtn_Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const ColorPickBtn = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 3px;
  margin-right: 0.5rem;
  background-color: rgb(226, 194, 179, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledColorPicker = styled(ColorPicker)`
  width: 180px;
`;

export const Add_Button = styled.button`
  background-color: #403024;
  color: #f7f3f5;
`;
