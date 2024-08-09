import { InputContainerProps } from '@/commons/types/signUp_type';

import * as S from './styles';
import { ChangeEvent, ReactNode, useEffect } from 'react';

interface FieldError {
  message?: string;
}

interface PhoneError {
  num: FieldError;
}

export default function SignUpInputContainer(props: InputContainerProps) {
  const { title, field, type, placeholder, readOnly } = props.el;

  const handlePhoneNumInput = (e: ChangeEvent<HTMLInputElement>) => {
    // 숫자만 입력되도록 하는 로직
    const reg = /\D/g;
    e.target.value = e.target.value.replace(reg, '');

    // 번호 수 입력 시 다음칸으로 포커싱
    const next = e.target.id;
    if (e.target.value.length === e.target.maxLength) {
      props.setFocus(`phone.${next}.num`);
    }
  };

  // phone 빈 칸 체크
  const phoneError = props.errors.phone as unknown as PhoneError[];
  const isPhoneBlank = phoneError ? phoneError?.find((err) => err) : null;

  //

  return (
    <S.Input_Container>
      <S.Input_Detail>
        <S.Input_Title>{title}</S.Input_Title>
        {title !== '휴대전화' ? (
          <S.SignUp_Input
            type={type}
            readOnly={readOnly}
            placeholder={placeholder}
            {...props.register(field)}
            autoComplete='on'
          />
        ) : (
          <S.PhoneNumber_Input_Container>
            {Array.from({ length: 3 }).map((_, idx) => (
              <S.SignUp_Input
                key={idx}
                isPhoneNumInput={true}
                type='text'
                id={String(idx + 1)}
                maxLength={idx <= 0 ? 3 : 4}
                onInput={handlePhoneNumInput}
                {...props.register(`phone.${idx}.num`)}
              />
            ))}
          </S.PhoneNumber_Input_Container>
        )}
        <S.ButtonContainer>
          {title === 'E-MAIL' && <S.ConfirmButton>중복확인</S.ConfirmButton>}
          {title === '주소' && (
            <S.ConfirmButton onClick={props.handleModal} type='button'>
              주소검색
            </S.ConfirmButton>
          )}
        </S.ButtonContainer>
      </S.Input_Detail>
      {title === '휴대전화' ? (
        <S.Error_Msg>{isPhoneBlank && isPhoneBlank?.num.message}</S.Error_Msg>
      ) : (
        <S.Error_Msg>
          {field && (props.errors[field]?.message as ReactNode)}
        </S.Error_Msg>
      )}
    </S.Input_Container>
  );
}
