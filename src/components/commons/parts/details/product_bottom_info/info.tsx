import { ClickStateProps } from '@/commons/types/detail_type';

import DetailComponent from '../product_toggle/detail_component/detail';
import UserBoardList from '../product_toggle/userBoardList/boardlist';

export default function RenderComponents(props: ClickStateProps) {
  const clicked = props.clickState;

  const reviewProps = {
    isReview: true,
    title: 'REVIEW',
    subtitle: '상품을 이용한 고객들의 후기글입니다',
    button_name: '상품후기작성',
  };

  const questionProps = {
    isReview: false,
    title: 'Q&A',
    subtitle: '상품에 대해 궁금한 점을 알려드려요',
    button_name: '상품문의하기',
  };

  return (
    <>
      {clicked === '상세정보' && <DetailComponent />}
      {clicked === '상품후기' && <UserBoardList reviewProps={reviewProps} />}
      {clicked === '상품문의' && (
        <UserBoardList questionProps={questionProps} />
      )}
    </>
  );
}
