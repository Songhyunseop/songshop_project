import * as S from './style';

interface CustomLinkProps {
  children?: React.ReactNode;
  href: string;
  prevent?: boolean;
  type: keyof typeof S.linkStyles;
}

export default function CustomLink({
  children,
  href,
  type,
  prevent,
  ...rest
}: CustomLinkProps) {
  // prevent 시 이동 이벤트 방지
  const isPreventMove = (e) => {
    prevent && e.preventDefault();
  };

  return (
    <S.Link_Wrapper {...rest} type={type}>
      <S.StyledLink onClick={isPreventMove} href={href}>
        {children}
      </S.StyledLink>
    </S.Link_Wrapper>
  );
}
