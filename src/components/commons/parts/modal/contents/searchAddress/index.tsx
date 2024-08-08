import * as S from './styles';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function SearchAddressComponent() {
  return (
    <S.SearchAddress_Wrapper>
      <DaumPostcodeEmbed style={{ height: '100%' }} />
    </S.SearchAddress_Wrapper>
  );
}
