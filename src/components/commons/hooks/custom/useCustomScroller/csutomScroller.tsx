import { RefObject, useState } from 'react';

export const useDragScroller = (
  scrollRef: RefObject<HTMLDivElement>,
  scrollBarRef: RefObject<HTMLDivElement>
) => {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [totalScroll, setTotalScroll] = useState(0);

  const onMouseClick = (e: React.MouseEvent<HTMLElement>) => {
    if (scrollRef.current) {
      const scrolledX = scrollRef.current.scrollLeft;
      setStartX(e.clientX + scrolledX);
      setTotalScroll(scrolledX);
    }

    setIsDragging(true);
  };

  const onDrag = (e) => {
    if (!isDragging) return;

    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startX - e.clientX;

      smoothScrollbar(getBarProgress(), 200);
    }
  };

  const getBarProgress = () => {
    let scrolledPercentage;

    if (scrollRef.current) {
      const range =
        scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
      scrolledPercentage = scrollRef.current.scrollLeft / range;
    }

    return scrolledPercentage ?? 0;
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

    Array.from(items).forEach((item) => {
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

  // 스크롤 섹션 애니메이션
  const smoothScrollTo = (targetX: number, duration: number) => {
    const startX = scrollRef.current.scrollLeft;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;

      const progress = Math.min(elapsedTime / duration, 1);
      const easing = 0.5 - Math.cos(progress * Math.PI) / 2; // Ease-in-out

      scrollRef.current.scrollLeft = startX + (targetX - startX) * easing;

      const rafId = requestAnimationFrame(animateScroll);
      if (progress >= 1) {
        cancelAnimationFrame(rafId);
        smoothScrollbar(getBarProgress(), 100);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  // 상태 바 애니메이션
  const progressState = scrollBarRef?.current?.children[0];
  const progressStateRect = progressState?.getBoundingClientRect();

  let currentPosition = progressStateRect?.left;

  const smoothScrollbar = (targetX: number, duration: number) => {
    const barWidth = scrollBarRef?.current.getBoundingClientRect().width;
    const stateWidth = progressStateRect?.width;

    // 애니메이션 시작시간, 최초 상태바 width 값
    const startTime = performance.now();
    const xPosition = ((targetX * 100) / 100) * barWidth;

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      currentPosition =
        currentPosition + (xPosition - currentPosition - stateWidth / 2) * 0.2;

      progressState.style.transform = `translateX(${currentPosition}px)`;

      const rafId = requestAnimationFrame(animateScroll);
      if (progress === 1) cancelAnimationFrame(rafId);
    };

    requestAnimationFrame(animateScroll);
  };

  return { onMouseClick, onDrag, onDragEnd };
};
