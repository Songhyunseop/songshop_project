import * as S from './styles';
import DaumPostcodeEmbed from 'react-daum-postcode';

export default function SearchAddressComponent() {
  return (
    <S.SearchAddress_Wrapper>
      <DaumPostcodeEmbed />
    </S.SearchAddress_Wrapper>
  );
}
