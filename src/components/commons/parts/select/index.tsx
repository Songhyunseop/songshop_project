import * as S from './styles';

export default function CustomSelect({ option, type }) {
  return (
    <>
      <S.CustomSelector {...option} type={type} />
    </>
  );
}
