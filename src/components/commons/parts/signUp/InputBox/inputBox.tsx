import { InputContainerProps } from '@/commons/types/signUp_type';

import * as S from './styles';
import { ChangeEvent, ReactNode } from 'react';

export default function InputContainer(props: InputContainerProps) {
  const { title, field, type, args } = props.el;

  const onlyNum = (e: ChangeEvent<HTMLInputElement>) => {
    const reg = /\D/g;
    e.target.value = e.target.value.replace(reg, '');

    if (e.target.value.length === e.target.maxLength) {
      if (e.target.id === 'phone1') props.setFocus(`phone[1]`);
      if (e.target.id === 'phone2') props.setFocus(`phone[2]`);
    }
  };

  return (
    <S.Input_Container>
      <S.Input_Detail>
        <S.Input_Title>{title}</S.Input_Title>
        {title !== '휴대전화' ? (
          <S.SignUp_Input type={type} {...props.register(field ?? '', args)} />
        ) : (
          <S.PhoneNumber_Input_Container>
            <S.SignUp_Input
              isPhoneNumInput={true}
              type='text'
              id={'phone1'}
              maxLength={3}
              onInput={onlyNum}
              {...props.register(`phone[0]`, {
                required: '번호를 입력하세요',
              })}
            />
            <S.SignUp_Input
              isPhoneNumInput={true}
              type='text'
              id={'phone2'}
              maxLength={4}
              onInput={onlyNum}
              {...props.register(`phone[1]`, {
                required: '번호를 입력하세요',
              })}
            />
            <S.SignUp_Input
              isPhoneNumInput={true}
              type='text'
              id={'phone3'}
              maxLength={4}
              onInput={onlyNum}
              {...props.register(`phone[2]`, {
                required: '번호를 입력하세요',
              })}
            />
          </S.PhoneNumber_Input_Container>
        )}
      </S.Input_Detail>
      {title === '휴대전화' ? (
        <S.Error_Msg>
          {Array.isArray(props.errors.phone) &&
            props.errors.phone?.find((err) => err)?.message}
        </S.Error_Msg>
      ) : (
        <S.Error_Msg>
          {field && (props.errors[field]?.message as ReactNode)}
        </S.Error_Msg>
      )}
    </S.Input_Container>
  );
}
