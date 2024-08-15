import { PropsWithChildren, useEffect, useRef, useState } from 'react';
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

const StyledToastContainer = styled(ToastContainer)<{ isError: boolean }>`
  position: absolute;
  top: 30px;
  left: 20%;
  z-index: 1;
  min-width: 170px;
  max-width: 200px;
  max-height: 45px;
  padding: 7px 0 0 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  opacity: 0;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  transform: ${(props) =>
    props.isError ? 'translateY(0)' : 'translateY(-50%)'};
  transition: ${(props) =>
    props.isError ? 'all 0.3s ease-in' : 'all 0.2s ease-out'};

  /* border: 4px solid gold; */

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
    display: flex;
  }

  .Toastify--animate {
    animation: none;
  }

  .Toastify__toast {
    min-height: 35px;
    border-radius: 0;
    background-color: white;
  }

  .Toastify__toast-body {
    padding: 0 10px;
  }

  .Toastify__toast-icon {
    width: 15px;
    height: 15px;
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
  const [isErrors, setIsErrors] = useState(false);

  const toastId = useRef(null);

  useEffect(() => {
    const containerId = 'valid' + title[NAME];

    const aa = errorstate[title[FIELD]];
    // aa.forEach((el) => console.log(111, errorstate[title[FIELD]].message));

    if (toastId.current) {
      console.log(title[FIELD], toastId.current, 31231223123123);

      toast.update(toastId.current, {
        render: '31232131312323123123213',
        type: 'warning',
        autoClose: false,
      });
    }

    if (isFieldError() && !toastId.current) {
      console.log('다시 렌더링요오오오', errorstate[title[FIELD]].message);

      toastId.current = toast.warning(
        <AlertToast message={errorstate[title[FIELD]].message} />,
        {
          containerId,
        }
      );
    }
  }, [errorstate]);

  // 각 Field 에러 유무 체크
  const isFieldError = () => {
    console.log('error', errorstate, title[NAME]);
    const result = errorstate && Object.keys(errorstate).includes(title[FIELD]);

    setIsErrors(result);

    return result;
  };

  return (
    <S.Body_Container>
      <S.Body_Left>
        {title[NAME]}
        <StyledToastContainer
          isError={isErrors}
          toastClassName='validToast'
          containerId={'valid' + title[NAME]}
          autoClose={false}
          limit={1}
          closeButton={false}
        />
      </S.Body_Left>
      <S.Body_Right>
        {isCustom ? children : <S.AddInput type={type} {...register} />}
      </S.Body_Right>
    </S.Body_Container>
  );
}
