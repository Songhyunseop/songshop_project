import styled from '@emotion/styled';

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
