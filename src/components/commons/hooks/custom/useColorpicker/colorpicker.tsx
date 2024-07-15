import { stocksState } from '@/commons/libraries/atom';
import { deepCopy } from '@/commons/utils/deepcopy';
import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

export const useColorPicker = () => {
  const [color, setColor] = useColor('#000000');

  const [stocks, setStocks] = useRecoilState(stocksState);
  const [copyStocks] = deepCopy([stocks]);

  const { setValue } = useFormContext();

  const toggleColorPick = (item) => {
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
    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const filterdColors = selected.selectColor.filter((c) => c !== color);

    selected.selectColor = filterdColors;
    copyStocks[targetIdx] = selected;

    setStocks(copyStocks);
    setValue(`stocks.${selected.index}.selectColor`, selected.selectColor);
  };

  const selectColor = (item) => {
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
    setValue(`stocks.${selected.index}.selectColor`, selected.selectColor);
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
  };

  const renderColorUI = () => {
    return (
      <>
        <Saturation height={180} color={color} onChange={setColor} />
        <Hue color={color} onChange={setColor} />
      </>
    );
  };

  return {
    toggleColorPick,
    removeColor,
    selectColor,
    resetColor,
    renderColorUI,
  };
};
