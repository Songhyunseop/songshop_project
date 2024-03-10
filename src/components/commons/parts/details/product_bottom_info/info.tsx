import { ClickStateProps } from '@/commons/types/detail_type';
import DetailComponents from '../product_toggle/detail_component/detail';
import { ReviewComponents } from '../product_toggle/review_component/styles';
import { QuestionComponents } from '../product_toggle/question_component/styles';

export default function RenderComponents(props: ClickStateProps) {
  console.log(props);

  const clicked = props.clickState;

  return (
    <>
      {clicked === '상세정보' && <DetailComponents />}
      {clicked === '상품후기' && <ReviewComponents />}
      {clicked === '상품문의' && <QuestionComponents />}
    </>
  );
}
