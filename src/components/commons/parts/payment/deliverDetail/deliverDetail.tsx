import DefaultInput from '../input/defaultInput/defaultInput';
import PhoneNumInput from '../input/phoneNumInput/phoneNumInput';
import PostCodeInput from '../input/postcodeInput/postcodeInput';
import * as S from './styles';

export default function DeliverInfoDetail() {
  return (
    <S.DeliverInfo_Wrapper>
      <S.Input_Container>
        <S.Input_Name>배송지</S.Input_Name>
        <DefaultInput />
      </S.Input_Container>
      <S.Input_Container isAddress={true}>
        <S.Input_Name>주소</S.Input_Name>
        <S.Address_Input_Container>
          <S.Post_Input_Container>
            <PostCodeInput />
            <S.Search_Address_Btn>주소검색</S.Search_Address_Btn>
          </S.Post_Input_Container>
          <DefaultInput isAddress={true} />
          <DefaultInput isAddress={true} />
        </S.Address_Input_Container>
      </S.Input_Container>
      <S.Input_Container>
        <S.Input_Name>휴대전화</S.Input_Name>
        <S.Phone_Input_Container>
          <PhoneNumInput />
          <PhoneNumInput />
          <PhoneNumInput />
        </S.Phone_Input_Container>
      </S.Input_Container>
      <S.Message_Input />
    </S.DeliverInfo_Wrapper>
  );
}
