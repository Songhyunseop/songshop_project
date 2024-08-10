import * as S from './styles';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import CustomLink from '../../parts/link/link';

export default function Header() {
  const router = useRouter();

  const headerRef = useRef(null);
  const dropDownRef = useRef(null);

  const navRoute = [
    { route: '/signIn', name: 'LOGIN' },
    { route: '/signUp', name: 'JOIN' },
    { route: '/', name: 'REVIEW' },
    { route: '/', name: 'MYPAGE' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const isPageScrolled = window.scrollY > headerRef.current.offsetHeight;

        setIsScrolled(isPageScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [router.asPath]);

  const openDrop = (e) => {
    if (e.currentTarget.id === 'MYPAGE') {
      setIsHover(true);
      // dropDownRef.current.style.height = `${100}%`;
      // dropDownRef.current.style.opacity = 1;
    }
  };

  const closeDrop = (e) => {
    if (e.currentTarget.id === 'MYPAGE') {
      setIsHover(false);
      // dropDownRef.current.style.height = 0;
      // dropDownRef.current.style.opacity = 0;
    }
  };

  return (
    <>
      <S.Header_Wrapper
        ref={headerRef}
        isScrolled={isScrolled}
        isChangeStylePath={router.asPath === '/'}
        isMain={router.asPath === '/'}
      >
        <S.Header_Main>
          <S.Main_Left>
            <CustomLink
              type={'headerTitle'}
              isScrolled={isScrolled}
              isChangeStylePath={router.asPath === '/'}
              href={'/'}
            >
              {'SONGSHOP'}
            </CustomLink>
          </S.Main_Left>
          <S.Main_Right isScrolled={isScrolled}>
            <S.Nav_Bar>
              <ul>
                {navRoute.map(({ route, name }) => (
                  <li
                    key={name}
                    id={name}
                    onMouseEnter={openDrop}
                    onMouseLeave={closeDrop}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      transition: 'all 1s ease',
                    }}
                  >
                    <CustomLink
                      type={'headerMenu'}
                      href={route}
                      isScrolled={isScrolled}
                      isChangeStylePath={router.asPath === '/'}
                    >
                      {name}
                    </CustomLink>
                    {name === 'MYPAGE' && isHover && (
                      <S.DropDown
                        ref={dropDownRef}
                        isScrolled={isScrolled}
                        isHover={isHover}
                      >
                        <S.DropItem>아이템쓰</S.DropItem>
                        <S.DropItem>아이템쓰</S.DropItem>
                        <S.DropItem>아이템쓰</S.DropItem>
                        <S.DropItem>아이템쓰</S.DropItem>
                        <S.DropItem>아이템쓰</S.DropItem>
                      </S.DropDown>
                    )}
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
