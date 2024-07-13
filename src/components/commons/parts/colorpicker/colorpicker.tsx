import { deepCopy } from '@/commons/utils/deepcopy';
import * as S from './styles';
import { useRecoilState } from 'recoil';
import { stocksState } from '@/commons/libraries/atom';
import { v4 as uuidv4 } from 'uuid';
import ColorSelector from './colorSelector/colorSelector';

export default function ColorPicker({ data }) {
  const [stocks, setStocks] = useRecoilState(stocksState);

  const toggleColorPick = (item) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    if (selected.label === '') {
      alert('사이즈를 먼저 선택해주세요');
      return;
    }

    copyStocks[targetIdx] = {
      ...selected,
      isPickerOpen: !selected.isPickerOpen,
    };

    setStocks(copyStocks);
  };

  const removeColor = (item: string, color: string) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const filterdColors = selected.selectColor.filter((c) => c !== color);

    selected.selectColor = filterdColors;
    copyStocks[targetIdx] = selected;

    setStocks(copyStocks);
  };

  return (
    <S.Color_PickBox>
      <S.Color_PickButton
        onClick={() => toggleColorPick(data.item)}
      ></S.Color_PickButton>
      <S.ColorsList>
        {data.selectColor?.map((color) => (
          <S.Colors
            key={uuidv4()}
            onClick={() => removeColor(data.item, color)}
            color={color}
          ></S.Colors>
        ))}
      </S.ColorsList>
      {data.isPickerOpen && <ColorSelector data={data} />}
    </S.Color_PickBox>
  );
}
