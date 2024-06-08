import styled from 'node_modules/@emotion/styled';

export const Layout_Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Wrapper_Top = styled.header`
  width: 100%;
  position: fixed;
  z-index: 99;
`;

export const Layout_Child = styled.div`
  padding-top: clamp(30rem, 30vw, 30vw);
`;
