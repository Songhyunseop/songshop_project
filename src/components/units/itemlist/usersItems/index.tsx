import * as S from './styles';
import { useSearchParams } from 'next/navigation';
import { IItemInfoList } from '@/commons/types/list_type';
import { useCustomModal } from '@/components/commons/hooks/custom/useCustomModal/customModal';
import AddItemModalContents from '@/components/commons/parts/modal/contents/addItem';
import WriteEditor from '@/components/commons/parts/editor/writeeditor';

export default function ItemList(props) {
  const itemInfoList: IItemInfoList = {
    basket: '장바구니',
    order: '주문목록',
    sell: '판매상품',
  };

  const searchParams = useSearchParams();
  const itemInfo = searchParams.get('itemInfo');

  const { Modal, handleModal, isOpen } = useCustomModal();

  return (
    <S.ItemList_Wrapper>
      <Modal handleModal={handleModal} isOpen={isOpen}>
        <AddItemModalContents />
      </Modal>
      <S.Title>{itemInfo && itemInfoList[itemInfo]}</S.Title>
      <S.Button_Wrapper>
        <S.Add_Button onClick={handleModal}>상품추가</S.Add_Button>
      </S.Button_Wrapper>
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
            <S.Delete_Btn>상품제거</S.Delete_Btn>
          </S.Item_Info>
        </S.Items>
      ))}
      <S.Payment_Section>
        <S.Total_Price>120,000원</S.Total_Price>
        <S.Pay_Button>결제진행</S.Pay_Button>
      </S.Payment_Section>
    </S.ItemList_Wrapper>
  );
}
