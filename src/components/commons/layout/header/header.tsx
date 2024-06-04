import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.Header_Wrapper>
        <S.Header_Main>
          <S.Main_Left>
            <S.User_SelectNav>
              <S.Nav_List>
                <li>
                  <S.Styled_Link href={'/signUp'}>LOGIN</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/signIn'}>JOIN</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/'}>CART</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/'}>MYPAGE</S.Styled_Link>
                </li>
              </S.Nav_List>
            </S.User_SelectNav>
          </S.Main_Left>
          <S.Main_Title>SONGSHOP</S.Main_Title>
          <S.Main_Right>
            <S.Search_Box></S.Search_Box>
            <S.Basket src='/bag.png' />
          </S.Main_Right>
        </S.Header_Main>
      </S.Header_Wrapper>
    </>
  );
}
