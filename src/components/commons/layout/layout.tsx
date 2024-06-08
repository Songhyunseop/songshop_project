import Header from './header/header';
import NavBar from './navigation/navBar/navBar';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Layout_Wrapper>
      <S.Wrapper_Top>
        <Header />
        <NavBar />
      </S.Wrapper_Top>
      <S.Layout_Child>{children}</S.Layout_Child>
    </S.Layout_Wrapper>
  );
}
