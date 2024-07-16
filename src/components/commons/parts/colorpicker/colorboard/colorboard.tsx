import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useColorPicker } from '@/components/commons/hooks/custom/useColorpicker/colorpicker';

export default function ColorSelector({ stockId }) {
  const { selectColor, resetColor, renderColorUI } = useColorPicker();

  return (
    <S.Custom_Color_Layout>
      {renderColorUI()}
      <S.ColorBtn_Box>
        <S.ColorPickBtn type='button' onClick={() => selectColor(stockId)}>
          <FontAwesomeIcon icon={faCheck} />
        </S.ColorPickBtn>
        <S.ColorPickBtn type='button' onClick={resetColor}>
          <FontAwesomeIcon icon={faRotateLeft} />
        </S.ColorPickBtn>
      </S.ColorBtn_Box>
    </S.Custom_Color_Layout>
  );
}
