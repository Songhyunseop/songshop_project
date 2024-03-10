import ItemBox from '@/components/commons/parts/itembox/itembox';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCarAlt,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function ItemList() {
  const categoryArr = ['JACKET', 'COAT', 'JUMPER'];

  const [currentPage, setCurrentPage] = useState(1);

  // 총 페이지 수
  const totalItems = 69;
  const totalPages = Math.ceil(totalItems / 5);

  // 현재 페이지 그룹
  const currentPageGroup = Math.ceil(currentPage / 5);

  const firstPage = (currentPageGroup - 1) * 5 + 1;

  const pageHandler = (idx: number) => {
    console.log(idx + 1);
    setCurrentPage(idx + 1);
  };

  return (
    <S.Main>
      <FontAwesomeIcon icon={faChevronRight} />
      <S.Category_Title>OUTWEAR</S.Category_Title>
      <S.Category_Nav>
        {categoryArr.map((el, idx) => (
          <S.Category key={idx}>{el}</S.Category>
        ))}
      </S.Category_Nav>
      <S.BestItem_Section>
        <S.Item_Title>BEST ITEM</S.Item_Title>
        <S.Items>
          {new Array(4).fill(1).map((_, idx) => (
            <ItemBox isBest={true} key={idx} />
          ))}
        </S.Items>
      </S.BestItem_Section>
      <S.AllItem_Section>
        <S.Item_Title>ALL ITEM</S.Item_Title>
        <S.Items isAll={true}>
          {new Array(8).fill(1).map((_, idx) => (
            <ItemBox key={idx} />
          ))}
        </S.Items>
      </S.AllItem_Section>
      <S.Pagination>
        <FontAwesomeIcon style={{ fontSize: '0.95rem' }} icon={faChevronLeft} />
        {new Array(5).fill(1).map((el, idx) => (
          <S.Page_Number
            key={idx}
            currentPage={currentPage}
            index={firstPage + idx}
            onClick={() => pageHandler(idx)}
          >
            {firstPage + idx}
          </S.Page_Number>
        ))}
        <FontAwesomeIcon
          style={{ fontSize: '0.95rem' }}
          icon={faChevronRight}
        />
      </S.Pagination>
    </S.Main>
  );
}
