import * as S from './styles';

export default function InfoComponent() {
  return (
    <S.Detail_Product>
      <S.Info isSummary={true}>
        <S.Index>상품요약</S.Index>
        <S.Info_Contents>
          오호호호호 이런상품이랍디다 아하하하하하하 헤헤헤 이게바로 상품이란
          것이지요
        </S.Info_Contents>
      </S.Info>
      <S.Info>
        <S.Index>판매가</S.Index>
        <S.Info_Contents>40,000원</S.Info_Contents>
      </S.Info>
      <S.Info>
        <S.Index>국내/해외배송</S.Index>
        <S.Info_Contents>국내배송</S.Info_Contents>
      </S.Info>
      <S.Info>
        <S.Index>배송방법</S.Index>
        <S.Info_Contents>택배</S.Info_Contents>
      </S.Info>
      <S.Info>
        <S.Index>배송비</S.Index>
        <S.Info_Contents>2,500원</S.Info_Contents>
      </S.Info>
    </S.Detail_Product>
  );
}
