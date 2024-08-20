import styled from '@emotion/styled';
import { useRef } from 'react';
import { useDragScroller } from '../../hooks/custom/useCustomScroller/csutomScroller';

const StyledContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  margin-top: 5%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: appear 0.5s ease-out;
`;

export const DragScroller = ({ children }) => {
  const mouseScrollRef = useRef(null);

  const { onMouseClick, onDrag } = useDragScroller(mouseScrollRef);

  return (
    <StyledContainer
      ref={mouseScrollRef}
      onMouseDown={onMouseClick}
      onMouseMove={onDrag}
    >
      {children}
    </StyledContainer>
  );
};
