import { MouseEvent } from 'react';
import * as S from './styles';
import { ClickStateProps } from '@/commons/types/detail_type';

export default function SelectNav(props: ClickStateProps) {
  const clickState = props.clickState;

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    props.setClickState?.(target.textContent ?? '');
  };

  const stateArr = ['상세정보', '상품후기', '상품문의'];

  return (
    <S.Select_Nav>
      <S.Nav_List>
        {stateArr.map((el, idx) => (
          <S.Nav_Item key={idx}>
            <S.Nav_Content
              el={el}
              clickState={clickState}
              onClick={handleClick}
            >
              {el}
            </S.Nav_Content>
          </S.Nav_Item>
        ))}
      </S.Nav_List>
    </S.Select_Nav>
  );
}
