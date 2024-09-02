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
  const [totalScroll, setTotalScroll] = useState(0);

  const onMouseClick = (e) => {
    // console.log(scrollRef, 'refreferef');

    const scrolledX = scrollRef.current.scrollLeft;

    setIsDragging(true);
    setStartX(e.clientX + scrolledX);
    setTotalScroll(scrolledX);
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startX - e.clientX;
    }
  };

  const onDragEnd = (e) => {
    if (!isDragging) return;

    // 기본 이벤트 트리거 방지 함수
    const preventEffects = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const currentX = scrollRef.current.scrollLeft;

    const scrolledDiff = Math.abs(currentX - totalScroll);
    const items = scrollRef.current.children;

    // // 가장 근거리에 있는 아이템, 스크롤 상 타겟 위치 초기화
    let closestItem = items[0];
    let targetPosition = 0;

    Array.from(items).forEach((item, idx) => {
      // 드래그 시 아이템 클릭 이벤트 방지 (드래그 범위 diff가 일정범위 이하일 경우 클릭으로 간주(eventListener 제거))
      if (scrolledDiff > 15) item.addEventListener('click', preventEffects);
      else item.removeEventListener('click', preventEffects);

      const distance = Math.abs(item.offsetLeft - currentX);
      const currentClose = Math.abs(closestItem.offsetLeft - currentX);

      if (distance < currentClose) closestItem = item;
    });

    smoothScrollTo(closestItem.offsetLeft, 200);

    // 드래그 상태 종료
    setIsDragging(false);
  };

  const smoothScrollTo = (targetX: number, duration: number) => {
    const startX = scrollRef.current.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing = 0.5 - Math.cos(progress * Math.PI) / 2; // Ease-in-out

      scrollRef.current.scrollLeft = startX + (targetX - startX) * easing;

      // console.log(targetX, startX, 111);

      const rafId = requestAnimationFrame(animateScroll);
      if (progress >= 1) cancelAnimationFrame(rafId);
    };

    requestAnimationFrame(animateScroll);
  };

  return { onMouseClick, onDrag, onDragEnd };
};
