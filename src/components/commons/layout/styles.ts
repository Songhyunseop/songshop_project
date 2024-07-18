import styled from 'node_modules/@emotion/styled';

export const Layout_Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Layout_Child = styled.div`
  margin-top: ${(props) => (props.isHeader ? 0 : '70px')}; // 헤더 높이값
`;
