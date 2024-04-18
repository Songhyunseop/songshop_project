import * as S from './styles';

export default function Ordered() {
  const coloredStyle = {
    color: 'rgb(226, 194, 179)',
    fontWeight: '600',
  };

  const nonColoredStyle = {
    fontWeight: '600',
  };

  return (
    <S.Main>
      <S.Ordered_Number>주문번호 : a12kj3l2k163lk</S.Ordered_Number>
      <S.Order_Mention>
        <span style={coloredStyle}>주문이 정상적으로 접수</span>
        <span style={nonColoredStyle}>되었습니다</span>
      </S.Order_Mention>
      <S.Button_Section>
        <S.GotoOrderList_Btn>주문내역 보러가기</S.GotoOrderList_Btn>
        <S.GotoHome_Btn>홈으로 가기</S.GotoHome_Btn>
      </S.Button_Section>
    </S.Main>
  );
}
