import ItemBox from '@/components/commons/parts/itembox/itembox';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getBestProduct,
  getDataList,
} from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { useQuery } from '@tanstack/react-query';

export default function ItemList() {
  const {
    data: productData,
    isLoading: productLoading,
    isError: productError,
  } = useQuery({
    queryKey: ['product'],
    queryFn: () => getDataList(8),
  });

  console.log(productData, 123);

  const {
    data: bestData,
    isLoading: bestProductLoading,
    isError: bestProductError,
  } = useQuery({
    queryKey: ['product', 'best'],
    queryFn: getBestProduct,
  });

  const categoryArr = ['JACKET', 'COAT', 'JUMPER'];

  const [currentPage, setCurrentPage] = useState(1);
  const category = useSearchParams().get('category');

  // 총 페이지 수
  // const totalItems = 69;
  // const totalPages = Math.ceil(totalItems / 5);

  // 현재 페이지 그룹
  const currentPageGroup = Math.ceil(currentPage / 5);
  const firstPage = (currentPageGroup - 1) * 5 + 1;

  const pageHandler = (idx: number) => {
    console.log(idx + 1);
    setCurrentPage(idx + 1);
  };

  // queryString 추출

  return (
    <S.Main>
      <S.Category_Title>{category}</S.Category_Title>
      <S.Category_Nav>
        {categoryArr.map((el, idx) => (
          <S.Category key={idx}>{el}</S.Category>
        ))}
      </S.Category_Nav>
      <S.BestItem_Section>
        <S.Item_Title>BEST ITEM</S.Item_Title>
        {/* <S.Items>
          {bestData?.bestProduct?.map((data, idx) => (
            <ItemBox key={idx} data={data} isBest={true} height={150} />
          ))}
        </S.Items> */}
      </S.BestItem_Section>
      <S.AllItem_Section>
        <S.Item_Title>ALL ITEM</S.Item_Title>
        <S.Items isAll={true}>
          {!productLoading
            ? productData?.productData?.map((data, idx) => (
                <ItemBox key={idx} data={data} height={150} />
              ))
            : new Array(8).fill(1).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: '100%',
                    border: '2px solid red',
                    paddingBottom: '150%',
                  }}
                ></div>
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
          // style={{ fontSize: '0.95rem' }}
          icon={faChevronRight}
        />
      </S.Pagination>
    </S.Main>
  );
}
