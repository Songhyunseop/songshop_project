import styled from '@emotion/styled';
import Select from 'react-select';

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
