import { InputContainerProps } from '@/commons/types/signUp_type';
import * as S from './styles';

export default function InputContainer(props: InputContainerProps) {
  return (
    <S.Input_Container>
      <S.Input_Title>{props.inputName}</S.Input_Title>
      {props.inputName !== '휴대전화' ? (
        <S.SignUp_Input />
      ) : (
        <S.PhoneNumber_Input_Container>
          {Array.from({ length: 3 }).map((_, idx) => (
            <S.SignUp_Input key={idx} isPhoneNumInput={true} />
          ))}
        </S.PhoneNumber_Input_Container>
      )}
    </S.Input_Container>
  );
}
