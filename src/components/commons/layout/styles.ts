import styled from 'node_modules/@emotion/styled';

export const Layout_Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Nav_Sticky_Container = styled.div`
  width: 100%;
  position: sticky;
  z-index: 99;
  top: 0;
  margin-bottom: clamp(0.3rem, 7vw, 7vw);
`;

export const Layout_Child = styled.div``;
