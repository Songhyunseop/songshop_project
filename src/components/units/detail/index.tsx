import * as S from './styles';

import { useRouter } from 'next/router';

import InfoComponent from '@/components/commons/parts/details/product_top_info/info/info';
import InfoCheckComponents from '@/components/commons/parts/details/product_top_info/check/check';
import RenderComponents from '@/components/commons/parts/details/product_bottom_info/info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import { useState } from 'react';
import SelectNav from '@/components/commons/layout/navigation/selctnav/selectnav';

export default function Detail() {
  const router = useRouter();
  console.log(router);

  const [clickState, setClickState] = useState('상세정보');

  return (
    <>
      <S.Main>
        <S.DetailWrapper_Top>
          <S.Product_Pic_Carousel>캐러셀 자리</S.Product_Pic_Carousel>
          <S.Details>
            <S.Product_Name>상품이름</S.Product_Name>
            <InfoComponent />
            <InfoCheckComponents />
            <S.Check_Total>
              <S.Index>TOTAL</S.Index>
              <S.Info_Contents>40,000원</S.Info_Contents>
            </S.Check_Total>
            <S.BtnWrapper>
              <S.Button_Buy>BUY NOW</S.Button_Buy>
              <S.Button_Bascket>
                <FontAwesomeIcon
                  style={{ fontSize: '2.5rem', color: '#F7F3F5' }}
                  icon={faShoppingBag}
                />
              </S.Button_Bascket>
            </S.BtnWrapper>
          </S.Details>
        </S.DetailWrapper_Top>
        <S.DetailWrapper_Bottom>
          <SelectNav clickState={clickState} setClickState={setClickState} />
          <RenderComponents clickState={clickState} />
        </S.DetailWrapper_Bottom>
      </S.Main>
    </>
  );
}
