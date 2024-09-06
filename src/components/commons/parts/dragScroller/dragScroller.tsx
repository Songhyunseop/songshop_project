import styled from '@emotion/styled';
import { useRef } from 'react';
import { useDragScroller } from '../../hooks/custom/useCustomScroller/csutomScroller';

const StyledContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2%;
  margin-top: 5%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  animation: appear 0.5s ease-out;
`;

export const Progress_Bar = styled.div`
  width: 100%;
  padding: 10px 0;
  position: relative;

  ::after {
    content: '';
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 5px;
    background-color: #dbdbdb;
  }
`;

export const Progress_State = styled.div`
  width: 30%;
  padding: 3px 0;
  border-radius: 15px;
  position: relative;
  z-index: 1;
  /* height: 5px; */
  overflow: hidden;
  background-color: black;
  transform: translateX(-100px);
`;

export const DragScroller = ({ children }) => {
  const mouseScrollRef = useRef<HTMLDivElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);

  const { onMouseClick, onDrag, onDragEnd } = useDragScroller(
    mouseScrollRef,
    scrollBarRef
  );

  return (
    <>
      <StyledContainer
        ref={mouseScrollRef}
        onMouseDown={onMouseClick}
        onMouseMove={onDrag}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        {children}
      </StyledContainer>
      <Progress_Bar ref={scrollBarRef}>
        <Progress_State
        //   key={selected}
        ></Progress_State>
      </Progress_Bar>
    </>
  );
};
