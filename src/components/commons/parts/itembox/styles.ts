import styled from '@emotion/styled';

export const ItemBox = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  min-width: 300px;
  max-height: 700px;
  font-size: 2rem;
  background-color: gray;
  border: 3px solid blue;

  // width값에 따라 padding으로 비율 유지
  &:before {
    /* width: 100%; */
    content: '';
    display: block;
    padding-bottom: ${({ height }) => `${height}%`};
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
