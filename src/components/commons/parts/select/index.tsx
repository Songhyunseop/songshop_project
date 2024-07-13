import * as S from './styles';

function CustomSelect(props) {
  // registerParms = react hook form register 내부 Props
  // subRef = categorySelect 의 참조

  const { subRef, registerParms, ...rest } = props;

  return (
    <>
      <S.CustomSelector
        ref={(el) => {
          registerParms.ref(el);
          subRef.current = el;
        }}
        {...rest}
      />
    </>
  );
}

export default CustomSelect;
