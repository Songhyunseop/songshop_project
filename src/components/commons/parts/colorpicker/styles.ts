import styled from '@emotion/styled';

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
  /* scrollbar-width: 200px; Firefox */
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
