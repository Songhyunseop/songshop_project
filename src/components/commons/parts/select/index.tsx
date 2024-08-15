import { Controller, useFormContext } from 'react-hook-form';
import * as S from './styles';
import { forwardRef } from 'react';

function CustomSelect({ selectType, onChange, stockId, ...rest }, ref) {
  // registerParms = react hook form register 내부 Props
  // subRef = categorySelect 의 참조

  const { control } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={selectType}
        render={({ field }) => (
          <S.CustomSelector
            menuShouldScrollIntoView={false}
            ref={ref}
            onChange={(select) => {
              field.onChange(select ? select.value : null);
              onChange({ select, stockId });
            }}
            {...rest}
          />
        )}
      />
    </>
  );
}

export default forwardRef(CustomSelect);
