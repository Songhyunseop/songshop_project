import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { deepCopy } from '@/commons/utils/deepcopy';
import { stocksState } from '@/commons/libraries/atom';
import { useRecoilState } from 'recoil';

export default function ColorSelector({ data }) {
  const [color, setColor] = useColor('#000000');
  const [stocks, setStocks] = useRecoilState(stocksState);

  const selectColor = (item) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const isDuplicate = selected.selectColor.some(
      (itemColor: string) => itemColor === color.hex
    );

    if (isDuplicate) {
      alert('이미 선택된 색상입니다');
      return;
    }

    // // 선택 색상 추가하고 색상창 닫기
    selected.selectColor.push(color.hex);
    selected.isPickerOpen = false;

    copyStocks[targetIdx] = selected;
    setStocks(copyStocks);
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
  };

  return (
    <S.Custom_Color_Layout>
      <Saturation height={180} color={color} onChange={setColor} />
      <Hue color={color} onChange={setColor} />
      <S.ColorBtn_Box>
        <S.ColorPickBtn type='button' onClick={() => selectColor(data.item)}>
          <FontAwesomeIcon
            style={{
              width: '15px',
              height: '15px',
            }}
            icon={faCheck}
          />
        </S.ColorPickBtn>
        <S.ColorPickBtn type='button' onClick={resetColor}>
          <FontAwesomeIcon
            style={{
              width: '15px',
              height: '15px',
            }}
            icon={faRotateLeft}
          />
        </S.ColorPickBtn>
      </S.ColorBtn_Box>
    </S.Custom_Color_Layout>
  );
}
