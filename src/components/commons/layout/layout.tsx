import Header from './header/header';
import * as S from './styles';

export default function Layout({ children }) {
  return (
    <S.Layout_Wrapper>
      <Header />
      <div>{children}</div>
    </S.Layout_Wrapper>
  );
}
