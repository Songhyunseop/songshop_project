import styled from '@emotion/styled';

export const ItemBox = styled.div<{ height: number; minWidth: number }>`
  position: relative;
  min-width: ${({ minWidth }) => (minWidth ? `${minWidth}px` : 0)};
  font-size: 2rem;
  background-color: gray;
  height: 100%;

  // width값에 따라 padding으로 비율 유지
  &:before {
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
