import ItemList from '@/components/units/mypage/itemList';
import { useRouter } from 'next/router';

export default function ItemListPage() {
  const router = useRouter();
  console.log(router);

  return <ItemList isBasket={true} />;
}
