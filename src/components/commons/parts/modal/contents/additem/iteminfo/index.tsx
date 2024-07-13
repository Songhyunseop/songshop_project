import * as S from './styles';

export default function ItemInfo({ title, register, isCustom, children }) {
  return (
    <S.Body_Container>
      <S.Body_Left>{title}</S.Body_Left>
      <S.Body_Right>
        {isCustom ? children : <S.AddInput {...register} />}
      </S.Body_Right>
    </S.Body_Container>
  );
}
