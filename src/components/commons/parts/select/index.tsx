import { forwardRef, useRef } from 'react';
import * as S from './styles';

function CustomSelect(props, ref) {
  // registerParms = react hook form register 내부 Props
  // subRef = categorySelect 의 참조

  const { registerParms, subRef, ...rest } = props;

  return (
    <>
      <S.CustomSelector
        {...rest}
        ref={(el) => {
          registerParms.ref(el);
          subRef.current = el;
        }}
      />
    </>
  );
}

export default forwardRef(CustomSelect);
