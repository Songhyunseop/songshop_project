import * as S from './styles';

export default function ProductInfoDetail() {
  return (
    <S.OrderItem>
      <S.Item_Info>
        <S.Img_Container>
          <S.Item_Img src='/item.png' />
        </S.Img_Container>
        <S.Item_Contents>
          <S.Item_Name>상품명</S.Item_Name>
          <S.Item_Option>
            <S.Option_Size>사이즈 : M</S.Option_Size>
            <S.Option_Color>색상 : 블랙</S.Option_Color>
            <S.Option_Count>수량 : 1개</S.Option_Count>
          </S.Item_Option>
          <S.Item_Price>40,000원</S.Item_Price>
        </S.Item_Contents>
      </S.Item_Info>
      <S.Cancel_Btn>X</S.Cancel_Btn>
    </S.OrderItem>
  );
}
