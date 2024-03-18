import * as S from './styles';

import OrderInfoDetail from '@/components/commons/parts/payment/orderDetail/orderDetail';
import DeliverInfoDetail from '@/components/commons/parts/payment/deliverDetail/deliverDetail';
import ProductInfoDetail from '@/components/commons/parts/payment/productDetail/orderDetail';

export default function Payment() {
  return (
    <S.Main>
      <S.Index_Container>
        <S.Order_Info>주문자 정보</S.Order_Info>
      </S.Index_Container>
      <S.Content_Detail>
        <OrderInfoDetail />
      </S.Content_Detail>
      <S.Index_Container>
        <S.Order_Info>배송지 정보</S.Order_Info>
      </S.Index_Container>
      <S.Content_Detail>
        <DeliverInfoDetail />
      </S.Content_Detail>
      <S.Index_Container>
        <S.Order_Info>주문 상품</S.Order_Info>
      </S.Index_Container>
      <S.Content_Detail>
        <ProductInfoDetail />
        <ProductInfoDetail />
      </S.Content_Detail>
      <S.Index_Container>
        <S.Order_Info>결제 수단</S.Order_Info>
      </S.Index_Container>
      <S.Content_Detail>
        <S.Pay_Method>
          <S.Pay_Card>카드결제</S.Pay_Card>
          <S.Pay_Kakao>
            <S.Payment_Icon src='/kakao.png' />
          </S.Pay_Kakao>
        </S.Pay_Method>
      </S.Content_Detail>
    </S.Main>
  );
}
