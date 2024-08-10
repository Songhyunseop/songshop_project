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

  const themeObj = {
    bgColor: '#DEDBD9',
    searchBgColor: '#ebe7e6',
  };

  return (
    <S.SearchAddress_Wrapper>
      <DaumPostcodeEmbed
        onComplete={handleComplete}
        theme={themeObj}
        style={{ height: '100%' }}
      />
    </S.SearchAddress_Wrapper>
  );
}
