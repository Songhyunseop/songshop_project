import styled from '@emotion/styled';
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
  grid-template-rows: 1fr 1fr 3.5fr 2fr 1fr 1fr 4fr 4fr;
  padding: 1.5rem;
`;

export const Body_Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-top: 1px solid #b2a0a0;
  border-right: 1px solid #b2a0a0;

  :nth-of-type(7) > .stock {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0.6rem;
    border: 3px solid red;
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
  align-items: flex-start;
`;

export const AddInput = styled.input<{ detail?: boolean }>`
  width: ${(props) => (props.detail ? '100%' : '50%')};
  min-width: 300px;
  height: ${(props) => (props.detail ? '90%' : '80%')};
`;

export const Stocks = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-radius: 3px;
  background-color: rgba(64, 50, 52, 0.77);
`;

export const Stocks_Info = styled.div`
  font-size: 1.5rem;
  margin-right: 10px;
  color: #f7f3f5;
`;

export const CloseBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.div`
  position: relative;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border: 1px solid #f7f3f5;
  border-radius: 3px;
  justify-self: end;

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
  width: 100px;
  height: 35px;
  color: #f7f3f5;
  font-size: 1.5rem;
  margin-top: 10px;
  background-color: #403234;
`;

export const Styled_Select = styled(Select)`
  width: 30%;
  margin-right: 90px;

  & .Select__control {
    border-radius: 2px;
    box-shadow: none;
    border: 1px solid black;
  }

  & .Select__placeholder {
    font-size: 1.5rem;
  }

  & .Select__single-value {
    font-size: 1.5rem;
  }

  & .Select__menu {
    border-radius: 2px;
  }

  & .Select__option {
    background-color: white;
    font-size: 1.5rem;

    :hover {
      background-color: #969696;
    }
  }
`;

export const Add_Button = styled.button`
  background-color: #403024;
  color: #f7f3f5;
`;
