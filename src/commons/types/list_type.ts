export interface PageProps {
  index: number;
  currentPage: number;
}

// items 컨테이너 타입
export interface ItemsProps {
  isAll?: boolean;
}

// 장바구니 타입

export interface IBasketListProps {
  isBasket: boolean;
}
