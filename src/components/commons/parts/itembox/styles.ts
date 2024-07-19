import styled from '@emotion/styled';

export const ItemBox = styled.div`
  position: relative;
  width: 100%;
  min-width: 250px;
  font-size: 2rem;
  background-color: gray;
  display: flex;
  justify-content: flex-end;

  // width값에 따라 padding으로 비율 유지
  &:before {
    width: 100%;
    content: '';
    display: block;
    padding-top: 130%;
  }
`;

export const Label = styled.div`
  width: 23%;
  height: 10%;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f3f5;
  background-color: #e2c2b3;
`;
