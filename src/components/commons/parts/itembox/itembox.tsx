import { ItemBoxProps } from '@/commons/types/itemBox_type';
import * as S from './styles';

export default function ItemBox(props: ItemBoxProps) {
  return (
    <S.ItemBox {...props}>{props.isBest && <S.Label>BEST</S.Label>}</S.ItemBox>
  );
}
