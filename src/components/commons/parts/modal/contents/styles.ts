import styled from '@emotion/styled';
import { ColorPicker } from 'react-color-palette';
import Select from 'react-select';

export const Modal_Header = styled.header`
  height: 12%;
  color: #f7f3f5;
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  background-color: #403234;
`;

export const Modal_Body = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 4fr 2fr 1fr 1fr auto 4fr;
  padding: 1.5rem;
  border: 2px solid red;
`;

export const Body_Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-top: 1px solid #b2a0a0;
  border-right: 1px solid #b2a0a0;

  :nth-of-type(7) > :nth-of-type(2) {
    display: flex;
    flex-direction: column;
    margin-top: 0.6rem;
  }
`;

export const Body_Left = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #f7f3f5;
  background-color: #e2c2b3;
  padding: 1.5rem 0 1.5rem 1.5rem;
`;

export const Body_Right = styled.div`
  padding: 0 1.2rem;
  display: flex;
  align-items: center;
`;

export const AddInput = styled.input<{ detail?: boolean }>`
  width: 50%;
  min-width: 300px;
  height: 80%;
  font-size: 1.7rem;
  padding: 0.5rem;
`;

export const DetailText = styled.textarea`
  width: 100%;
  height: 90%;
  padding: 0.8rem;
  font-size: 1.7rem;
  resize: none;
`;

export const Stocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 3px;
  background-color: rgba(64, 50, 52, 0.77);
`;

export const Select_Stock = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Stocks_Info = styled.div`
  font-size: 1.5rem;
  color: #f7f3f5;

  margin-right: 1rem;

  :not(:nth-of-type(1)) {
    margin-left: 4rem;
  }
`;

export const Close = styled.div`
  position: relative;
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
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #403234;
`;

export const Size_Select = styled(Select)`
  width: 25%;

  & .SizeSelect__control {
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    border: 1px solid black;
  }

  & .SizeSelect__placeholder {
    font-size: 1.5rem;
  }

  & .SizeSelect__single-value {
    font-size: 1.5rem;
  }

  & .SizeSelect__menu {
    border-radius: 2px;
  }

  & .SizeSelect__option {
    background-color: white;
    font-size: 1.5rem;

    :hover {
      background-color: #969696;
    }
  }
`;

export const Count_Select = styled(Select)`
  width: 25%;

  & .CountSelect__control {
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    border: 1px solid black;
  }

  & .CountSelect__placeholder {
    font-size: 1.5rem;
  }

  & .CountSelect__single-value {
    font-size: 1.5rem;
  }

  & .CountSelect__menu {
    border-radius: 2px;
  }

  & .CountSelect__menu-list {
    z-index: 99;
    max-height: 200px;
    overflow-y: auto;
  }

  & .CountSelect__option {
    background-color: white;
    font-size: 1.5rem;
    color: black;

    :hover {
      background-color: #969696;
    }
  }
`;

export const Colors = styled.div<{ color: string }>`
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 3px;
  margin-left: 0.3rem;
  background-color: ${(props) => props.color};
`;

export const Color_PickBox = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  min-width: 180px;
  border: 3px solid gold;
`;

export const Color_PickButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 25px;
  height: 25px;
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
  margin-top: 0.5rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #403234;
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
  margin-right: 1rem;
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
