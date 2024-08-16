import * as S from './styles';
import { useSearchParams } from 'next/navigation';
import { IItemInfoList } from '@/commons/types/list_type';
import { useCustomModal } from '@/components/commons/hooks/custom/useCustomModal/modalhook';
import AddItemModalContents from '@/components/commons/parts/modal/contents/additem';
import supabase from '@/commons/utils/supabase/client';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/commons/libraries/atom';
import { useEffect, useState } from 'react';
import { getAllSellProduct } from '@/components/commons/hooks/query/useQueryGetSellProdcuts';

export default function ItemInfo() {
  const itemInfo = useSearchParams().get('itemInfo');
  const user = useRecoilValue(UserState);

  const [userId, setUserId] = useState(null);

  const itemInfoList: IItemInfoList = {
    basket: '장바구니',
    order: '주문목록',
    sell: '판매상품',
  };

  useEffect(() => {
    if (user) setUserId(user.id);
  }, [user]);

  const { Modal, handleModal, isOpen } = useCustomModal();
  const { data, isLoading } = getAllSellProduct(userId);

  console.log(data, 333);

  if (data)
    console.log(
      JSON.parse(data?.data[0].stock).forEach((el) =>
        console.log(el.selectColor, el.count, el.size)
      )
    );

  return (
    <S.ItemList_Wrapper>
      <Modal handleModal={handleModal} isOpen={isOpen}>
        <AddItemModalContents />
      </Modal>
      <S.Title>{itemInfo && itemInfoList[itemInfo]}</S.Title>
      {itemInfo === 'sell' && (
        <S.Button_Wrapper>
          <S.Add_Button onClick={handleModal}>상품추가</S.Add_Button>
        </S.Button_Wrapper>
      )}
      <S.Table_Header>
        <S.Table_List>ORDERS</S.Table_List>
        <S.Table_List>IMAGE</S.Table_List>
        <S.Table_List>ITEM NAME</S.Table_List>
        <S.Table_List>PRICE</S.Table_List>
        <S.Table_List>수량</S.Table_List>
        <S.Table_List>비고</S.Table_List>
      </S.Table_Header>
      {isLoading ? (
        <div style={{ height: '100vh' }}>로딩중...</div>
      ) : (
        data?.data.map((el, idx) => (
          <S.Items key={idx}>
            <S.Item_Info>{idx + 1}</S.Item_Info>
            <S.Item_Info>
              <S.Item_Img src='/item.png' />
            </S.Item_Info>
            <S.Item_Info>{el.product_name}</S.Item_Info>
            <S.Item_Info>{`${el.product_price} 원`}</S.Item_Info>
            <S.Item_Info>
              <div>
                <span>S</span>
                <span>3개</span>
              </div>
              <div>
                <span>M</span>
                <span>3개</span>
              </div>
              <div>
                <span>L</span>
                <span>3개</span>
              </div>
            </S.Item_Info>
            <S.Item_Info>
              <S.Edit_Btn>상품수정</S.Edit_Btn>
              <S.Delete_Btn>상품제거</S.Delete_Btn>
            </S.Item_Info>
          </S.Items>
        ))
      )}
      {itemInfo !== 'sell' && (
        <S.Payment_Section>
          <S.PayInfo>결제예정금액</S.PayInfo>
          <S.Total_Price>
            {data?.data?.reduce((acc, cur) => acc + cur.product_price, 0)}원
          </S.Total_Price>
          <S.Pay_Button>구매하기</S.Pay_Button>
        </S.Payment_Section>
      )}
    </S.ItemList_Wrapper>
  );
}
