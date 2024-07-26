import * as S from './styles';

export default function ReviewBox() {
  return (
    <S.Review_Wrapper>
      <S.Review_Contents>
        <S.Review_Top>
          <S.Product_img src='/carousel1.jpeg' />
        </S.Review_Top>
        <S.ReviewBottom>
          <S.Review>
            정말좋은 인듯아이템인듯아이템인듯 인듯아이템인듯아이템인듯합니다^^
          </S.Review>
          <S.Rate>★★★★★</S.Rate>
        </S.ReviewBottom>
      </S.Review_Contents>
    </S.Review_Wrapper>
  );
}
