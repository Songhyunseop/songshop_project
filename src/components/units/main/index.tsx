import * as S from './styles';

import MainSWiper from '@/components/commons/parts/swiper/mainSwiper/mainSwiper';
import ItemSwiper from '@/components/commons/parts/swiper/itemSwiper/itemSwiper';

import ItemBox from '@/components/commons/parts/itembox/itembox';

import { LegacyRef, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { throttle } from '@/commons/utils/throttle';

import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import ToggleNav from '@/components/commons/layout/navigation/toggleCategorynav/toggleCategorynav';
import ReviewBox from '@/components/commons/parts/reviewBox/reviewBox';
import AboutSection from './about/about';
import { getDataList } from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { DragScroller } from '@/components/commons/parts/dragScroller/dragScroller';
import { VideosPlayer } from '@/components/commons/parts/videos/videos';

export default function Main() {
  const selectTag = [
    '#다가오는 여름에 알맞은 Choice',
    '#집에서 입기 편한 데일리 룩',
    '#캐쥬얼한 느낌 그대로 Casual',
  ];

  const selectMockDataImage = [
    '/carousel1.jpeg',
    '/carousel2.jpeg',
    '/carousel3.jpeg',
  ];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: () => getDataList(12),
  });

  const [isNav, setIsNav] = useState({ best: false, new: false });

  //토글 인자 타입
  type navTypeProps = { best: boolean; new: boolean };

  const showCategory = (e) => {
    const navType = e.target.id as keyof navTypeProps;
    const nav = document.querySelector(`.${navType}Item`) as HTMLElement;
    const parent = nav?.previousSibling as HTMLElement;

    if (nav && parent) {
      const margin = getComputedStyle(parent).marginBottom;

      const result = isNav[navType]
        ? parseInt(margin) - nav.offsetHeight
        : parseInt(margin) + nav.offsetHeight;

      parent.style.marginBottom = `${result}px`;
      nav.style.transform = isNav[navType] ? 'none' : 'translateY(100%)';

      setIsNav((prev) => {
        return { ...prev, [navType]: !prev[navType] };
      });
    }
  };

  // select 클릭
  const [selected, setSelected] = useState(0);
  const [selectData, setSelectedData] = useState(selectMockDataImage[0]);

  const clickRecommend = (e) => {
    const selectOne = Number(e.target.id);

    setSelected(selectOne);
    setSelectedData(selectMockDataImage[selectOne]);
  };

  //
  //
  // mouseScroll

  // const [startX, setStartX] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  // const [totalScroll, setTotalScroll] = useState(0);

  // const mouseScrollRef = useRef(null);

  // const onMouseClick = (e) => {
  //   const scrolledX = mouseScrollRef.current.scrollLeft;

  //   setIsDragging(true);
  //   setStartX(e.clientX + scrolledX);
  //   setTotalScroll(scrolledX);
  // };

  // const onDrag = (e) => {
  //   if (!isDragging) return;

  //   if (mouseScrollRef.current) {
  //     mouseScrollRef.current.scrollLeft = startX - e.clientX;

  //     smoothScrollXbar(getBarProgress(), 200);
  //   }
  // };

  // const getBarProgress = () => {
  //   const range =
  //     mouseScrollRef.current.scrollWidth - mouseScrollRef.current.offsetWidth;

  //   return mouseScrollRef.current.scrollLeft / range;
  // };

  // const dragEnd = (e) => {
  //   if (!isDragging) return;

  //   // 기본 이벤트 트리거 방지 함수
  //   const preventEffects = (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //   };

  //   const currentScrollX = mouseScrollRef.current.scrollLeft;

  //   const items = mouseScrollRef.current.children;
  //   const scrolledDiff = Math.abs(currentScrollX - totalScroll);

  //   // // 가장 근거리에 있는 아이템, 스크롤 상 타겟 위치 초기화
  //   let closestItem = items[0];

  //   Array.from(items).forEach((item, idx) => {
  //     // 드래그 시 아이템 클릭 이벤트 방지 (드래그 범위 diff가 일정범위 이하일 경우 클릭으로 간주(eventListener 제거))
  //     if (scrolledDiff > 15) item.addEventListener('click', preventEffects);
  //     else item.removeEventListener('click', preventEffects);

  //     const distance = Math.abs(item.offsetLeft - currentScrollX);
  //     const currentClose = Math.abs(closestItem.offsetLeft - currentScrollX);

  //     if (distance < currentClose) closestItem = item;
  //   });

  //   smoothScrollTo(closestItem.offsetLeft, 200);

  //   // 드래그 상태 종료
  //   setIsDragging(false);
  // };

  // const smoothScrollTo = (targetX, duration) => {
  //   const container = mouseScrollRef.current;
  //   const startX = container.scrollLeft;
  //   const startTime = performance.now();

  //   const animateScroll = (currentTime) => {
  //     const elapsedTime = currentTime - startTime;
  //     const progress = Math.min(elapsedTime / duration, 1);
  //     const easing = 0.5 - Math.cos(progress * Math.PI) / 2; // Ease-in-out

  //     container.scrollLeft = startX + (targetX - startX) * easing;

  //     const rafId = requestAnimationFrame(animateScroll);
  //     if (progress >= 1) {
  //       cancelAnimationFrame(rafId);
  //       smoothScrollXbar(getBarProgress(), 100);
  //     }
  //   };

  //   requestAnimationFrame(animateScroll);
  // };

  // // 전역 처리
  // const progressBar = useRef(null);
  // const progressState = progressBar?.current?.children[0];
  // let currentPosition = progressState?.getBoundingClientRect().left;

  // const smoothScrollXbar = (targetX, duration) => {
  //   const barWidth = progressBar?.current.getBoundingClientRect().width;
  //   const stateWidth = progressState?.getBoundingClientRect().width;

  //   // 애니메이션 시작시간, 최초 상태바 width 값
  //   const startTime = performance.now();
  //   const xPosition = ((targetX * 100) / 100) * barWidth;

  //   const animateScroll = (currentTime) => {
  //     const elapsedTime = currentTime - startTime;
  //     const progress = Math.min(elapsedTime / duration, 1);

  //     currentPosition =
  //       currentPosition + (xPosition - currentPosition - stateWidth / 2) * 0.1;

  //     progressState.style.transform = `translateX(${currentPosition}px)`;

  //     const rafId = requestAnimationFrame(animateScroll);
  //     if (progress === 1) cancelAnimationFrame(rafId);
  //   };

  //   requestAnimationFrame(animateScroll);
  // };

  // resize
  const recommendRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // 초기 너비 계산 및 설정
    if (recommendRef.current) {
      const initWidth = (recommendRef.current.offsetWidth * 18) / 100;
      itemsRef.current.forEach((el) => {
        el.style.setProperty('min-width', `${initWidth}px`);
      });
    }

    // 반응형 resize 너비 재설정
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { borderBoxSize } = entry;
        const containerWidth = borderBoxSize[0].inlineSize;

        const calculatedWidth = (containerWidth * 18) / 100;

        itemsRef.current.forEach((el) =>
          el.style.setProperty('min-width', `${calculatedWidth}px`)
        );
      }
    });

    if (recommendRef.current) resizeObserver.observe(recommendRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [data, selected]);

  return (
    <S.Main>
      <VideosPlayer />
      <MainSWiper />
      <S.Main_Body>
        <S.Item_Section>
          <S.Section_Title>
            {' BEST ITEM '}
            <S.ToggleItemBtn
              onClick={throttle(showCategory, 400)}
              icon={faSortDown}
              id='best'
            />
          </S.Section_Title>
          <ToggleNav
            className={'bestItem'}
            list={['OUTWEAR', 'TOP', 'BOTTOM', 'SHOES', 'BAG', 'ACC']}
            isOpen={isNav.best}
          />
          <ItemSwiper />
        </S.Item_Section>
        <S.Item_Section>
          <S.Section_Title>
            {'NEW ITEM'}
            <S.ToggleItemBtn
              icon={faSortDown}
              id='new'
              onClick={throttle(showCategory, 400)}
            />
          </S.Section_Title>
          <ToggleNav
            className={'newItem'}
            list={['OUTWEAR', 'TOP', 'BOTTOM', 'SHOES', 'BAG', 'ACC']}
            isOpen={isNav.new}
          />

          <S.Main_ItemsList>
            {!isLoading
              ? data?.productData?.map((product, idx) => (
                  <ItemBox key={idx} product={product} height={150} />
                ))
              : new Array(12).fill(1).map((el, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '100%',
                      border: '2px solid red',
                      paddingBottom: '150%',
                    }}
                  >
                    hello
                  </div>
                ))}
          </S.Main_ItemsList>
          <S.Button>MORE</S.Button>
        </S.Item_Section>
      </S.Main_Body>
      <S.Recommend className='recommend' ref={recommendRef}>
        <S.Recommend_Contents>
          <S.Recommend_Left>
            <S.Rcmd_Left_Top>
              <S.Recommend_Title>SELECT</S.Recommend_Title>
            </S.Rcmd_Left_Top>
            <S.Select_Bar>
              {selectTag.map((tag, idx) => (
                <S.Select_Tag
                  key={tag}
                  id={String(idx)}
                  selected={idx === selected}
                  onClick={clickRecommend}
                >
                  {tag}
                </S.Select_Tag>
              ))}
            </S.Select_Bar>
            <S.Rcmd_Left_Bottom>
              {/* <S.Scroll_Container
                key={selected}
                ref={mouseScrollRef}
                onMouseDown={onMouseClick}
                onMouseMove={throttle(onDrag, 50)}
                onMouseUp={dragEnd}
                onMouseLeave={dragEnd}
              >
                {data?.productData?.map((product, idx) => (
                  <ItemBox key={idx} product={product} minWidth={250} />
                ))}
              </S.Scroll_Container> */}
              <DragScroller key={selected}>
                {data?.productData?.map((product, idx) => (
                  <ItemBox
                    // ref={itemsRef}
                    ref={(el) => (itemsRef.current[idx] = el)}
                    key={idx}
                    product={product}
                    minWidth={200}
                  />
                ))}
              </DragScroller>
              {/* <S.Progress_Bar ref={progressBar}>
                <S.Progress_State></S.Progress_State>
              </S.Progress_Bar> */}
            </S.Rcmd_Left_Bottom>
          </S.Recommend_Left>
          <S.Recommend_Right key={selected}>
            <S.StyledImage
              src={selectData}
              alt='selectProfiles'
              fill
              sizes={`(min-width: 1200px) 70vw,
              (min-width: 828px)  50vw,
              (min-width: 640px) 30vw`}
              priority={true}
            />
          </S.Recommend_Right>
        </S.Recommend_Contents>
      </S.Recommend>
      <S.Review_Section>
        <S.Section_Title>REVIEWS</S.Section_Title>
        <S.Review_List minWidth={150}>
          {new Array(4).fill(1).map((_, idx) => (
            <ReviewBox key={idx} />
          ))}
        </S.Review_List>
        <S.Button>ALL REVIEWS</S.Button>
      </S.Review_Section>
      <AboutSection />
    </S.Main>
  );
}
