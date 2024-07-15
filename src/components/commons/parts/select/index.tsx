import { Controller, useFormContext } from 'react-hook-form';
import * as S from './styles';

function CustomSelect({ selectType, subRef, onChange, stockId, ...rest }) {
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
            ref={(el) => {
              if (subRef) subRef.current = el;
            }}
            onChange={(select) => {
              field.onChange(select);
              onChange({ select, stockId });
            }}
            {...rest}
          />
        )}
      />
    </>
  );
}

export default CustomSelect;
