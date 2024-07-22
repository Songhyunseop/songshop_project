import { useRouter } from 'next/router';
import Header from './header/header';
import * as S from './styles';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <S.Layout_Wrapper>
      <Header />
      <S.Layout_Child isHeader={router.asPath === '/'}>
        {children}
      </S.Layout_Child>
      <Footer />
    </S.Layout_Wrapper>
  );
}
