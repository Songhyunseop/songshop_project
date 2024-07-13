import { PropsWithChildren } from 'react';
import * as S from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';

interface ItemInfoProps {
  title: string;
  register?: UseFormRegisterReturn;
  isCustom?: boolean;
}

export default function ItemInfo({
  title,
  register,
  isCustom,
  children,
}: PropsWithChildren<ItemInfoProps>) {
  return (
    <S.Body_Container>
      <S.Body_Left>{title}</S.Body_Left>
      <S.Body_Right>
        {isCustom ? children : <S.AddInput {...register} />}
      </S.Body_Right>
    </S.Body_Container>
  );
}
