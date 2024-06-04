import Header from './header/header';
import NavBar from './navigation/navBar/navBar';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Layout_Wrapper>
      <Header />
      <NavBar />
      <div>{children}</div>
    </S.Layout_Wrapper>
  );
}
