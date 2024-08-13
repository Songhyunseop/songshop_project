import { PropsWithChildren, useEffect, useState } from 'react';
import * as S from './styles';
import { UseFormRegisterReturn } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import styled from '@emotion/styled';
import AlertToast from '@/components/commons/parts/toastify/alertToast';

interface ItemInfoProps {
  title: string;
  register?: UseFormRegisterReturn;
  isCustom?: boolean;
}

const NAME = 0;
const FIELD = 1;

const StyledToastContainer = styled(ToastContainer)`
  z-index: 1;
  max-width: 170px;
  max-height: 45px;
  padding: 7px 0 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  border: 4px solid gold;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -5%;
    border-bottom: 20px solid white;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
  }

  .validToast {
    padding: 0;
    /* width: 100px; */
    border: 2px solid blue;
    display: flex;
  }

  .Toastify__toast {
    min-height: 35px;
    border-radius: 0;
    background-color: white;
  }

  .Toastify__toast-body {
    padding: 0 3px;
  }

  .Toastify__toast-icon {
    width: 18px;
    height: 18px;
    border: 2px solid red;
  }

  .Toastify__toast-body > div:last-child {
    flex: none;
  }
`;

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
    // 초기화 (Toast Container 초기 렌더링)
    setIsInit(true);

    const containerId = 'valid' + title[NAME];

    if (isFieldError() || !isInit) {
      toast.warning(<AlertToast />, {
        position: '',
        containerId,
      });
      return;
    }

    setIsInit(false);
  }, [errorstate]);

  // 각 Field 에러 유무 체크
  const isFieldError = () => {
    return Object.keys(errorstate).includes(title[FIELD]);
  };

  return (
    <S.Body_Container>
      <S.Body_Left>
        {title[NAME]}
        {(isInit || isFieldError()) && (
          <StyledToastContainer
            toastClassName='validToast'
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
