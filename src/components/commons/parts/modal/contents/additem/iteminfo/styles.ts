import styled from '@emotion/styled';

export const Body_Container = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) minmax(0, 80%);
  border-top: 1px solid #b2a0a0;
  border-right: 1px solid #b2a0a0;

  :nth-of-type(7) {
    display: grid;
  }

  :nth-of-type(7) > :nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 7px 0 0 0; */
  }
`;

export const Body_Left = styled.div`
  min-width: 140px;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f7f3f5;
  background-color: #e2c2b3;
  padding: 0.5rem 0 0.5rem 0.8rem;
  position: relative;
`;

export const Body_Right = styled.div`
  position: relative;
  width: 100%;
  padding: 0.4rem 0.4rem 0.4rem 0.4rem;
  display: flex;
  align-items: center;
`;

export const AddInput = styled.input<{ detail?: boolean }>`
  width: 50%;
  min-width: 300px;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.2rem;
  font-size: 1rem;
`;
