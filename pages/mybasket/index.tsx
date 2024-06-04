import ItemList from '@/components/units/itemlist/usersItems';
import { useRouter } from 'next/router';

export default function ItemListPage() {
  const router = useRouter();
  console.log(router);
  return <ItemList isBasket={true} />;
}
