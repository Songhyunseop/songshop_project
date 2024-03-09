import * as S from './styles';

import MainSWiper from '@/components/commons/parts/mainSwiper/mainSwiper';
import ItemSwiper from '@/components/commons/parts/itemSwiper/itemSwiper';
import { useState } from 'react';
import ItemBox from '@/components/commons/parts/itembox/itembox';

export default function Main() {
  const [ishover, setisHover] = useState(false);

  const handleHovder = () => {
    setisHover(true);
    console.log(123);
  };

  return (
    <S.Main>
      <MainSWiper />
      <S.BestItem_Section>
        <S.Section_Title>BEST ITEM</S.Section_Title>
        <ItemSwiper />
      </S.BestItem_Section>
      <S.Board_Section>
        <S.Board_Box className={ishover ? 'hovered' : ''}>
          광고용 네비게이션자리
        </S.Board_Box>
        <S.Board_Box
          onMouseEnter={() => handleHovder()}
          onMouseLeave={() => setisHover(false)}
          // ishover={ishover}
        >
          광고용 네비게이션자리
        </S.Board_Box>
      </S.Board_Section>
      <S.NewItem_Section>
        <S.Section_Title>NEW ITEM</S.Section_Title>
        <S.Item_List>
          {new Array(8).fill(1).map((el, idx) => (
            <ItemBox key={idx} />
          ))}
        </S.Item_List>
        <S.Button>MORE</S.Button>
      </S.NewItem_Section>
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
    </S.Main>
  );
}
