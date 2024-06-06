export interface PageProps {
  index: number;
  currentPage: number;
}

// items 컨테이너 타입
export interface ItemsProps {
  isAll?: boolean;
}

// itemInfoList 타입
export interface IItemInfoList {
  [key: string]: string;
}
