import { forwardRef, useImperativeHandle } from 'react';
import * as S from './styles';

function CustomSelect(props, ref) {
  return (
    <>
      <S.CustomSelector {...props} ref={ref} />
    </>
  );
}

export default forwardRef(CustomSelect);
