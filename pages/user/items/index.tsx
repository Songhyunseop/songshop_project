import ItemInfo from '@/components/units/useritems';
import { useRouter } from 'next/router';

export default function BasketItem() {
  const router = useRouter();
  console.log(router);
  return <ItemInfo />;
}
