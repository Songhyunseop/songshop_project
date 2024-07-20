import * as S from './styles';

import MainSWiper from '@/components/commons/parts/swiper/mainSwiper/mainSwiper';
import ItemSwiper from '@/components/commons/parts/swiper/itemSwiper/itemSwiper';

import ItemBox from '@/components/commons/parts/itembox/itembox';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { throttle } from '@/commons/utils/throttle';

import { getDataList } from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import ToggleNav from '@/components/commons/layout/navigation/toggleCategorynav/toggleCategorynav';

export default function Main() {
  const videoUrls = ['/videos/shopvid1.mp4', '/videos/shopvid2.mp4'];
  const randomPhrases = [
    '새로운 시작은 늘 캐쥬얼하게 송샵에서',
    '나만을 위한 코디, 송샵에서 확인해보세요',
    '나의 트렌디를 뽐내고 싶다면? 지금 해 송샵',
    '이번 주, 입을게 고민된다면? 역시나 이곳',
    '당신의 스타일로 당신만의 코디를 맞춰보세요',
  ];

  const selectTag = [
    '다가오는 여름에 알맞은 Choice',
    '집에서 입기 편한 데일리 룩',
    '캐쥬얼한 느낌 그대로 Casual',
  ];

  const [count, setCount] = useState(8);
  const [phrase, setPhrase] = useState(randomPhrases[0]);
  const [isNav, setIsNav] = useState({ best: false, new: false });

  // 추후 리팩토링 시 관련 폴더로 옮길코드
  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: getDataList,
  });

  // 화면 문구 변환 함수
  const usePhraseChanger = () => {
    let isRunning = false;
    let timer: ReturnType<typeof setTimeout>;

    const changePhrase = () => {
      const index = Math.floor(Math.random() * 5);

      return randomPhrases[index];
    };

    const delaytoTrigger = () => {
      if (isRunning) clearTimeout(timer);

      isRunning = true;
      timer = setTimeout(() => {
        const phrase = changePhrase();
        setPhrase(phrase);
        isRunning = false;
      }, 2000);
    };

    return { delaytoTrigger };
  };

  const { delaytoTrigger } = usePhraseChanger();

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

  const clickRecommend = (e) => {
    const selectOne = Number(e.target.id);

    setSelected(selectOne);
  };

  return (
    <S.Main>
      <S.VideoWrapper onMouseLeave={delaytoTrigger}>
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

            <S.ToggleItemBtn
              onClick={throttle(showCategory, 600)}
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
              onClick={throttle(showCategory, 600)}
            />
          </S.Section_Title>
          <ToggleNav
            className={'newItem'}
            list={['OUTWEAR', 'TOP', 'BOTTOM', 'SHOES', 'BAG', 'ACC']}
            isOpen={isNav.new}
          />
          <S.Item_List minWidth={280}>
            {new Array(15).fill(1).map((el, idx) => (
              <ItemBox key={idx} height={130} />
            ))}
          </S.Item_List>
          <S.Button>MORE</S.Button>
        </S.Item_Section>
      </S.Main_Body>
      <S.Recommend>
        <S.Recommend_Left>
          <S.Recommend_Top>
            <S.Recommend_Title>SELECT</S.Recommend_Title>
          </S.Recommend_Top>
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
          <S.Recommend_Bottom>
            <ItemBox height={130} />
            <ItemBox height={130} />
            <ItemBox height={130} />
            <ItemBox height={130} />
            <ItemBox height={130} />
          </S.Recommend_Bottom>
        </S.Recommend_Left>
        <S.Recommend_Right>
          <S.StyledImage
            src={'/carousel2.jpeg'}
            alt='selectProfiles'
            priority
            fill
            sizes={`(min-width: 1200px) 70vw,
              (min-width: 828px)  50vw,
              (min-width: 640px) 30vw`}
          />
        </S.Recommend_Right>
      </S.Recommend>
      <S.Review_Section>
        <S.Section_Title>REVIEWS</S.Section_Title>
        <S.Item_List minWidth={250}>
          {new Array(4).fill(1).map((_, idx) => (
            <ItemBox key={idx} height={100} />
          ))}
        </S.Item_List>
        <S.Button>ALL REVIEWS</S.Button>
      </S.Review_Section>
    </S.Main>
  );
}
