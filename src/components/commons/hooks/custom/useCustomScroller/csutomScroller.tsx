import { useRef, useState } from 'react';
// import styled from '@emotion/styled';

// const StyledContainer = styled.div`
//   cursor: pointer;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   gap: 20px;
//   margin-top: 5%;
//   overflow-x: auto;
//   scrollbar-width: none;
//   -ms-overflow-style: none;
//   animation: appear 0.5s ease-out;
// `;

export const useDragScroller = (scrollRef) => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseClick = (e) => {
    console.log(scrollRef, 'refreferef');

    const scrolledX = scrollRef.current.scrollLeft;

    setIsDragging(true);
    setStartX(e.clientX + scrolledX);
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startX - e.clientX;
    }
  };

  return { onMouseClick, onDrag };
};
