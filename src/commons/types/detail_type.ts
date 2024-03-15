import { Dispatch, SetStateAction } from 'react';

export interface IDetailProps {
  isSummary?: boolean;
}

export interface ClickStateProps {
  clickState: string;
  setClickState?: Dispatch<SetStateAction<string>>;
}

export interface NavContentProps {
  el: string;
  clickState: string;
}

export interface isThumbsImageProps {
  isSameSlide?: boolean;
  isThumbs?: boolean;
}

// review, question 공통 컴포넌트 props 타입 지정
interface IBoardComponentProps {
  isReview: boolean;
  title: string;
  subtitle: string;
  button_name: string;
}

export interface IUserBoardListProps {
  reviewProps?: IBoardComponentProps;
  questionProps?: IBoardComponentProps;
}

export interface IReviewDetailProps {
  clickedInfoArr: boolean;
}
