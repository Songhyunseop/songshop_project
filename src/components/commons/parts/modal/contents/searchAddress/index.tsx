import * as S from './styles';
import DaumPostcodeEmbed from 'react-daum-postcode';

interface IAdressData {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

export default function SearchAddressComponent({ setValue, handleModal }) {
  const handleComplete = (data: IAdressData) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('address', fullAddress);

    handleModal();
  };

  return (
    <S.SearchAddress_Wrapper id='address_wrapper'>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        style={{ height: '100%' }}
      />
    </S.SearchAddress_Wrapper>
  );
}
