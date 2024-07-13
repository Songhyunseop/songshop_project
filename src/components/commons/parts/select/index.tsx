import * as S from './styles';

function CustomSelect({ subRef, register, ...rest }) {
  // registerParms = react hook form register 내부 Props
  // subRef = categorySelect 의 참조

  return (
    <>
      <S.CustomSelector
        ref={(el) => {
          register.ref(el);
          if (subRef) subRef.current = el;
        }}
        {...rest}
      />
    </>
  );
}

export default CustomSelect;
