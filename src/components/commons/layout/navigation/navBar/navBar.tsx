import * as S from './styles';

export default function NavBar() {
  const NavCategory = [
    'OUTWEAR',
    'TOP',
    'BOTTOMS',
    'SHOES',
    'BAG',
    'ONSALE',
    'REVIEWS',
  ];

  return (
    <S.Nav_Wrapper>
      <S.CategoryList>
        {NavCategory.map((category: string) => (
          <li key={category}>
            <S.Styled_Link
              category={category}
              href={{ pathname: '/list', query: { category } }}
              scroll={false}
            >
              {category}
            </S.Styled_Link>
          </li>
        ))}
      </S.CategoryList>
    </S.Nav_Wrapper>
  );
}
