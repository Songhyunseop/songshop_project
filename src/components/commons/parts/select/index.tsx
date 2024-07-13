import { Controller, useFormContext } from 'react-hook-form';
import * as S from './styles';

function CustomSelect({ register, subRef, onChange, ...rest }) {
  // registerParms = react hook form register 내부 Props
  // subRef = categorySelect 의 참조
  console.log('타타타타타');

  const { control } = useFormContext();

  // const { ref, ...last } = register;

  // console.log('나머지', rest);
  return (
    <>
      <Controller
        control={control}
        name={register.name}
        render={({ field }) => (
          <S.CustomSelector
            ref={(el) => {
              if (subRef) subRef.current = el;
            }}
            onChange={(select) => {
              field.onChange(select);
              onChange(select);
            }}
            {...rest}
          />
        )}
      />
    </>
  );
}

export default CustomSelect;
