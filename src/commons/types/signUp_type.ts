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
    title: string;
    field: string;
    type: string;
    placeholder?: string;
    readOnly: boolean;
  };
  errors: FieldErrors<FieldValues>;
  setFocus: UseFormSetFocus<FieldValues>;
}
