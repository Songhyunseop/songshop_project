import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormSetFocus,
} from 'react-hook-form';

export interface InputProps {
  isPhoneNumInput?: boolean;
}

export interface InputContainerProps {
  register: UseFormRegister<FieldValues>;
  el: {
    title?: string;
    field?: string;
    type?: string;
    args?: {
      required?: string;
      pattern?: {
        value: RegExp;
        message: string;
      };
      minLength?: {
        value: number;
        message: string;
      };
      validate?: {
        isMatchedPassword: (val: string) => true | string;
      };
    };
  };
  errors: FieldErrors<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
}
