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
