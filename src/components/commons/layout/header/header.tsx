import Link from 'next/link';
import * as S from './styles';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import CustomLink from '../../parts/link/link';

export default function Header() {
  const router = useRouter();
  const headerRef = useRef();

  const navRoute = [
    { route: '/signIn', name: 'LOGIN' },
    { route: '/signUp', name: 'JOIN' },
    { route: '/', name: 'REVIEW' },
    { route: '/', name: 'MYPAGE' },
  ];

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
            <CustomLink type={'headerTitle'} isScrolled={isScrolled} href={'/'}>
              {'SONGSHOP'}
            </CustomLink>
          </S.Main_Left>
          <S.Main_Right>
            <S.Nav_Bar>
              <ul>
                {navRoute.map(({ route, name }) => (
                  <li key={name}>
                    <CustomLink
                      type={'headerMenu'}
                      href={route}
                      isScrolled={isScrolled}
                    >
                      {name}
                    </CustomLink>
                  </li>
                ))}
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
