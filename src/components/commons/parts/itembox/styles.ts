import styled from '@emotion/styled';

export const ItemBox = styled.div`
  max-width: 320px;
  width: 100%;
  font-size: 2rem;
  background-color: gray;
  display: flex;
  justify-content: flex-end;
  border: 2px solid black;

  // width값에 따라 padding으로 비율 유지
  &:before {
    content: '';
    display: block;
    padding-top: 109.375%;
  }
`;

export const Label = styled.div`
  width: 23%;
  height: 10%;
  font-weight: 500;
  /* line-height: 2; 부모높이와 같게 설정
  text-align: center;
  vertical-align: middle; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f7f3f5;
  background-color: #e2c2b3;
`;
