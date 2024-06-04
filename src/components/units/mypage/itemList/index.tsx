import * as S from './styles';

export default function ItemList(props) {
  return (
    <S.ItemList_Wrapper>
      <S.Title>{'장바구니 또는 주문목록 또는 판매상품'}</S.Title>
      <S.Table_Header>
        <S.Table_List>ORDERS</S.Table_List>
        <S.Table_List>IMAGE</S.Table_List>
        <S.Table_List>ITEM NAME</S.Table_List>
        <S.Table_List>PRICE</S.Table_List>
        <S.Table_List>수량</S.Table_List>
        <S.Table_List>비고</S.Table_List>
      </S.Table_Header>
      {new Array(3).fill(1).map((el, idx) => (
        <S.Items key={idx}>
          <S.Item_Info>{idx + 1}</S.Item_Info>
          <S.Item_Info>
            <S.Item_Img src='/item.png' />
          </S.Item_Info>
          <S.Item_Info>상품이름</S.Item_Info>
          <S.Item_Info>40,000원</S.Item_Info>
          <S.Item_Info>3</S.Item_Info>
          <S.Item_Info>
            {props.isBasket ? (
              <S.Delete_Btn>상품제거</S.Delete_Btn>
            ) : (
              '입금완료'
            )}
          </S.Item_Info>
        </S.Items>
      ))}
      {props.isBasket && (
        <S.Payment_Section>
          <S.Total_Price>120,000원</S.Total_Price>
          <S.Pay_Button>결제진행</S.Pay_Button>
        </S.Payment_Section>
      )}
    </S.ItemList_Wrapper>
  );
}
