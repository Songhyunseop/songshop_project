import * as S from './styles';

import MainSWiper from '@/components/commons/parts/mainSwiper/mainSwiper';
import ItemSwiper from '@/components/commons/parts/itemSwiper/itemSwiper';
import ItemBox from '@/components/commons/parts/itembox/itembox';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { getDataList } from '@/components/commons/hooks/query/useQueryGetAllProducts';

export default function Main() {
  const [count, setCount] = useState(8);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['product'],
    queryFn: getDataList,
  });

  const timeDelay = () => {
    setTimeout(() => {
      countUp();
    }, 3000);
  };

  const countUp = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <S.Main>
      <MainSWiper />
      <S.BestItem_Section>
        <S.Section_Title>BEST ITEM</S.Section_Title>
        <ItemSwiper />
      </S.BestItem_Section>
      <S.Board_Section>
        <S.Board_Box>광고용 네비게이션자리 폰트</S.Board_Box>
        <S.Board_Box>광고용 네비게이션자리 폰트</S.Board_Box>
      </S.Board_Section>
      <S.NewItem_Section>
        <S.Section_Title>NEW ITEM</S.Section_Title>
        <S.Item_List>
          {new Array(count).fill(1).map((el, idx) => (
            <ItemBox key={idx} />
          ))}
        </S.Item_List>
        <S.Button onClick={timeDelay}>MORE</S.Button>
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
