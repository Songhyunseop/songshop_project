import * as S from './styles';

export default function Footer() {
  return (
    <S.Footer_Wrapper>
      <S.Shop_Name>SONGSHOP</S.Shop_Name>
      <S.Info>
        <S.Info_Detial>
          <S.Index weight={400} size={1.5}>
            CALL
          </S.Index>
          <S.Address weight={500} size={1.6}>
            010-9945-5352
          </S.Address>
          <S.Content>
            평일 am 10:00 ~ pm 06:00, 점심 pm 12:00 ~ pm 01:00 에는 쉬는 관계로
            연락이 어렵습니다.
          </S.Content>
        </S.Info_Detial>
        <S.Info_Detial>
          <S.Index weight={400} size={1.5}>
            BANK
          </S.Index>
          <S.Content margin={['top 10']}>농협 670-33-2543029</S.Content>
          <S.Content margin={['bottom 10']}>국민 990802-01-234413</S.Content>
          <S.Content>예금주 - 송현섭</S.Content>
        </S.Info_Detial>
        <S.Info_Detial>
          <S.Index weight={400} size={1.5}>
            DELIVERY
          </S.Index>
          <S.Content>우체국 택배 교환 및 반품주소</S.Content>
          <S.Content>
            경상남도 창원시 의창구 달맞이로 25 881-8번길 10층
          </S.Content>
          <S.Content>반품 접수시 지정 택배사를 이용하여 보내주세요</S.Content>
        </S.Info_Detial>
        <S.Info_Detial>
          <S.Content size={1.6} weight={300} margin={['bottom 10']}>
            SHOP
          </S.Content>
          <S.Content size={1.6} weight={300} margin={['bottom 10']}>
            MY BASKET
          </S.Content>
          <S.Content size={1.6} weight={300} margin={['bottom 10']}>
            REVIEW
          </S.Content>
        </S.Info_Detial>
      </S.Info>
    </S.Footer_Wrapper>
  );
}
