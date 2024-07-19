import * as S from './style';

interface CustomLinkProps {
  children?: React.ReactNode;
  href: string;
  type: keyof typeof S.linkStyles;
}

export default function CustomLink({
  children,
  href,
  type,
  ...rest
}: CustomLinkProps) {
  return (
    <S.Link_Wrapper {...rest} type={type}>
      <S.StyledLink href={href}>{children}</S.StyledLink>
    </S.Link_Wrapper>
  );
}
