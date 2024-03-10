import * as S from './styles';

export default function InfoCheckComponents() {
  return (
    <S.Check_Product>
      <S.Info>
        <S.Index>상품수량</S.Index>
        <input
          style={{
            width: '100%',
            height: '30px',
          }}
        />
      </S.Info>
      <S.Info>
        <S.Index>사이즈</S.Index>
        <input
          style={{
            width: '100%',
            height: '30px',
          }}
        />
      </S.Info>
      <S.Info>
        <S.Index>색상</S.Index>
        <input
          style={{
            width: '100%',
            height: '30px',
          }}
        />
      </S.Info>
    </S.Check_Product>
  );
}
