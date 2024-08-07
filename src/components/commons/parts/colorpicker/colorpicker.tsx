import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import ColorSelector from './colorboard/colorboard';
import { useColorPicker } from '../../hooks/custom/useColorpicker/colorpicker';

export default function ColorPicker({ stock }) {
  const { toggleColorPick, removeColor } = useColorPicker();

  return (
    <S.Color_PickBox>
      <S.Color_PickButton
        onClick={() => toggleColorPick(stock.item)}
      ></S.Color_PickButton>
      <S.ColorsList>
        {stock.selectColor.map((color) => (
          <S.Colors
            key={uuidv4()}
            onClick={() => removeColor(stock.item, color)}
            color={color}
          ></S.Colors>
        ))}
      </S.ColorsList>
      {stock.isPickerOpen && <ColorSelector stockId={stock.item} />}
    </S.Color_PickBox>
  );
}
