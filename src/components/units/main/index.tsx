import * as S from './styles';

import MainSWiper from '@/components/commons/parts/swiper/mainSwiper/mainSwiper';
import ItemSwiper from '@/components/commons/parts/swiper/itemSwiper/itemSwiper';

import ItemBox from '@/components/commons/parts/itembox/itembox';

import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getDataList } from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  const videoUrls = ['/videos/shopvid1.mp4', '/videos/shopvid2.mp4'];
  const randomPhrases = [
    '새로운 시작은 늘 캐쥬얼하게 송샵에서',
    '나만을 위한 코디, 송샵에서 확인해보세요',
    '나의 트렌디를 뽐내고 싶다면? 지금 해 송샵',
    '이번 주, 입을게 고민된다면? 역시나 이곳',
    '당신의 스타일로 당신만의 코디를 맞춰보세요',
  ];

  const [count, setCount] = useState(8);
  const [phrase, setPhrase] = useState(randomPhrases[0]);
  const [isNav, setIsNav] = useState(false);

  // 추후 리팩토링 시 관련 폴더로 옮길코드
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: getDataList,
  });

  // throttle 설정
  const isThrottle = useRef(false);
  let check: ReturnType<typeof setTimeout>;

  const changePhrase = () => {
    if (isThrottle.current) {
      clearTimeout(check);
      return;
    }
    isThrottle.current = true;

    const index = Math.floor(Math.random() * 5);
    setPhrase(randomPhrases[index]);
  };

  const delayChagePhrase = () => {
    check = setTimeout(() => {
      isThrottle.current = false;
    }, 1000);
  };

  const clickToggle = (e) => {
    console.log(e.target);
    const nav = document.querySelector('.nav');
    const parent = nav?.previousSibling as HTMLElement;

    if (nav && parent) {
      const margin = getComputedStyle(parent).marginBottom;
      console.log(margin, isNav);
      const result = isNav
        ? parseInt(margin) - parseInt(nav.offsetHeight)
        : parseInt(margin) + parseInt(nav.offsetHeight);

      if (parent) parent.style.marginBottom = `${result}px`;

      setIsNav((prev) => !prev);
    }
  };

  return (
    <S.Main>
      <S.VideoWrapper
        onMouseEnter={changePhrase}
        onMouseLeave={delayChagePhrase}
      >
        <S.Main_Theme>{phrase}</S.Main_Theme>
        <S.Styled_ReactPlayer
          url={videoUrls}
          playing
          muted
          loop
          width={'100%'}
          height={'100vh'}
        />
      </S.VideoWrapper>
      <MainSWiper />
      <S.Main_Body>
        <S.Item_Section>
          <S.Section_Title>
            {' BEST ITEM '}
            <S.ToggleItemBtn icon={faSortDown} onClick={clickToggle} />
          </S.Section_Title>
          <S.Category_Bar className='nav' isNav={isNav}>
            <ul>
              <li>{'OUTWEAR'}</li>
              <li>{'TOP'}</li>
              <li>{'BOTTOM'}</li>
              <li>{'SHOES'}</li>
              <li>{'BAG'}</li>
              <li>{'ACC'}</li>
            </ul>
          </S.Category_Bar>
          <ItemSwiper />
        </S.Item_Section>
        {/* <S.Board_Section>
          <S.Board_Box>광고용 네비게이션자리 폰트</S.Board_Box>
          <S.Board_Box>광고용 네비게이션자리 폰트</S.Board_Box>
        </S.Board_Section> */}
        <S.Item_Section>
          <S.Section_Title>NEW ITEM</S.Section_Title>
          <S.Category_Bar className='nav' isNav={isNav}></S.Category_Bar>
          <S.Item_List>
            {new Array(count).fill(1).map((el, idx) => (
              <ItemBox key={idx} />
            ))}
          </S.Item_List>
          <S.Button>MORE</S.Button>
        </S.Item_Section>
        <S.Banner>광고용 배너자리</S.Banner>
        <S.Review_Section>
          <S.Section_Title>REVIEWS</S.Section_Title>
          <S.Item_List>
            {new Array(4).fill(1).map((el, idx) => (
              <ItemBox key={idx} />
            ))}
          </S.Item_List>
          <S.Button>ALL REVIEWS</S.Button>
        </S.Review_Section>
      </S.Main_Body>
    </S.Main>
  );
}
