import { PropsWithChildren, useEffect, useState } from 'react';
import * as S from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

interface ItemInfoProps {
  title: string;
  register?: UseFormRegisterReturn;
  isCustom?: boolean;
}

const NAME = 0;
const FIELD = 1;

export default function ItemInfo({
  type,
  title,
  register,
  isCustom,
  children,
  errorstate,
}: PropsWithChildren<ItemInfoProps>) {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    // console.log(isInit || Object.keys(errorstate).includes(title[FIELD]), 234);
    setIsInit(true);

    const errors = Object.keys(errorstate);
    const containerId = 'valid' + title[NAME];

    if (errors.includes(title[FIELD]) || !isInit) {
      toast(12345, {
        position: '',
        containerId,
      });
    } else {
      setIsInit(false);
    }
  }, [errorstate]);

  return (
    <S.Body_Container>
      <S.Body_Left>
        {title[NAME]}
        {(isInit || Object.keys(errorstate).includes(title[FIELD])) && (
          <ToastContainer
            containerId={'valid' + title[NAME]}
            autoClose={false}
            limit={1}
            closeButton={false}
          />
        )}
      </S.Body_Left>
      <S.Body_Right>
        {isCustom ? children : <S.AddInput type={type} {...register} />}
      </S.Body_Right>
    </S.Body_Container>
  );
}
