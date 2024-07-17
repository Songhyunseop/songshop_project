import Header from './header/header';
import NavBar from './navigation/navBar/navBar';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Layout_Wrapper>
      <Header />
      {/* <S.Nav_Sticky_Container>
        <NavBar />
      </S.Nav_Sticky_Container> */}
      <S.Layout_Child>{children}</S.Layout_Child>
    </S.Layout_Wrapper>
  );
}
