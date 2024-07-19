import Link from 'next/link';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const router = useRouter();
  const headerRef = useRef();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetHeight)
          setIsScrolled(true);
        if (window.scrollY < headerRef.current.offsetHeight)
          setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <S.Header_Wrapper
        ref={headerRef}
        isScrolled={isScrolled}
        isMain={router.asPath === '/'}
      >
        <S.Header_Main>
          <S.Main_Left>
            <S.Styled_TitleLink href={'/'}>SONGSHOP</S.Styled_TitleLink>
            <Link
              href={{
                pathname: '/items',
                query: {
                  itemInfo: 'basket',
                },
              }}
            >
              <S.Basket src='/bag.png' />
            </Link>
          </S.Main_Left>
          <S.Main_Right>
            <S.Nav_Bar>
              <ul>
                <li>
                  <S.Styled_Link href={'/signIn'}>LOGIN</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/signUp'}>JOIN</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/'}>REVIEWS</S.Styled_Link>
                </li>
                <li>
                  <S.Styled_Link href={'/'}>MYPAGE</S.Styled_Link>
                </li>
                <li>
                  <S.Search_Box></S.Search_Box>
                </li>
              </ul>
            </S.Nav_Bar>
          </S.Main_Right>
        </S.Header_Main>
      </S.Header_Wrapper>
    </>
  );
}
