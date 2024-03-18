import { useState } from 'react';
import * as S from './styles';
import { IUserBoardListProps } from '@/commons/types/detail_type';

export default function UserBoardList({
  reviewProps,
  questionProps,
}: IUserBoardListProps) {
  const { title, subtitle, button_name } = reviewProps || questionProps || {};

  // 임시 데이터 (DB 받아오는 데이터로 변경예정)
  const arr = Array.from({ length: 8 }).map(() => ({ isClicked: false }));
  const [clickedInfoArr, setClickedInfoArr] = useState(arr);

  const reviewClickHandler = (idx: number) => {
    setClickedInfoArr((prevClickedInfoArr) => {
      const newArr = prevClickedInfoArr.map((item, i) => ({
        ...item,
        isClicked: i === idx ? !item.isClicked : false,
      }));

      return newArr;
    });
  };
  return (
    <S.ReviewComponents>
      <S.Top>
        <S.Title>{title}</S.Title>
        <S.Sub_Title>{subtitle}</S.Sub_Title>
      </S.Top>
      <S.Body>
        {new Array(8).fill(1).map((el, idx) => (
          <div key={idx} onClick={() => reviewClickHandler(idx)}>
            <S.User_Review>
              <S.Index>{idx + 1}</S.Index>
              <S.Review_Title>
                착용감이 정말로 좋네요!! or 문의드립니다!!!
              </S.Review_Title>
              <S.Review_Rate>★★★★★</S.Review_Rate>
            </S.User_Review>
            <S.Review_Detail
              clickedInfoArr={clickedInfoArr && clickedInfoArr[idx].isClicked}
            ></S.Review_Detail>
          </div>
        ))}
      </S.Body>
      <div style={{ position: 'absolute', zIndex: 1, top: '80%' }}>
        여기는 가려질 부분
      </div>
      <S.Bottom>
        <S.Button>{button_name}</S.Button>
      </S.Bottom>
    </S.ReviewComponents>
  );
}
