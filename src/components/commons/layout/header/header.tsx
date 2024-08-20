import * as S from './styles';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import CustomLink from '../../parts/link/link';
import { UseDropDown } from '../../hooks/custom/useDropdown/dropdown';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/commons/libraries/atom';

export default function Header() {
  const router = useRouter();
  const headerRef = useRef(null);

  const user = useRecoilValue(UserState);

  const [isScrolled, setIsScrolled] = useState(false);

  const navRoute = [
    { route: '/signIn', name: user ? 'LOGOUT' : 'LOGIN' },
    { route: '/list', name: 'SHOP' },
    { route: '/signUp', name: user ? 'Q&A' : 'JOIN' },
    { route: '/', name: 'REVIEW' },
    { route: '/', name: 'MYPAGE', prevent: true },
  ];

  const { DropDown, isHover, onAnimationEnd, isVisible, openDrop, closeDrop } =
    UseDropDown();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const isPageScrolled = window.scrollY > headerRef.current.offsetHeight;

        setIsScrolled(isPageScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, [router.asPath]);

  const userType = user?.user_metadata.user_type;
  const optionArr = [
    '내 정보',
    '장바구니',
    userType === 'seller' ? '내 판매상품' : '주문현황',
    '회원탈퇴',
  ];

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
                {navRoute.map(({ route, name, prevent }) => (
                  <S.NavButtonLi
                    key={name}
                    id={name}
                    onMouseEnter={() => openDrop(name)}
                    onMouseLeave={closeDrop}
                  >
                    <CustomLink
                      type={'headerMenu'}
                      href={route}
                      prevent={prevent}
                      isScrolled={isScrolled}
                      isChangeStylePath={router.asPath === '/'}
                    >
                      {name}
                    </CustomLink>
                    {name === 'MYPAGE' && (
                      <DropDown
                        onAnimationEnd={onAnimationEnd}
                        isHover={isHover === 'MYPAGE'}
                        isVisible={isVisible === 'MYPAGE'}
                        isScrolled={isScrolled}
                        isChangeStylePath={router.asPath === '/'}
                        options={optionArr}
                      />
                    )}
                  </S.NavButtonLi>
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
