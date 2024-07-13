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
  width: 85%;
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
