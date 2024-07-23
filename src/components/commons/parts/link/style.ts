import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';

// 헤더 메뉴목록 링크
const headerLinkStyle = css`
  font-size: 1.3rem;
  /* color: black; */
  transition: all 0.3s ease-out;
  font-weight: 400;

  &:hover {
    color: #e2c2b3;
  }
`;
// 헤더 타이틀 링크
const headerTtileStyle = css`
  text-decoration-line: none;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
`;

export const linkStyles = {
  headerMenu: headerLinkStyle,
  headerTitle: headerTtileStyle,
};

// 기타 props 조건부 로직 처리
const getPropsResult = ({ isScrolled, isChangeStylePath }) => {
  if (isScrolled) return 'black';
  if (isChangeStylePath === false) return 'black';
  console.log(isChangeStylePath);

  return 'white';
};

// default
export const StyledLink = styled(Link)`
  text-decoration-line: none;
  text-decoration: none;
`;

export const Link_Wrapper = styled.div<{ type: keyof typeof linkStyles }>`
  ${StyledLink} {
    ${({ type }) => linkStyles[type]}
    color: ${(props) => getPropsResult(props)};
  }
`;
