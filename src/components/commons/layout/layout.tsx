import { useRouter } from 'next/router';
import Header from './header/header';
import * as S from './styles';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <S.Layout_Wrapper>
      <Header />
      <S.Layout_Child isHeader={router.asPath === '/'}>
        {children}
      </S.Layout_Child>
    </S.Layout_Wrapper>
  );
}
