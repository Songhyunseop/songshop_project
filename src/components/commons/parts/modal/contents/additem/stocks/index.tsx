import * as S from './styles';

import { useRecoilState } from 'recoil';
import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { useSizeSelect } from '@/components/commons/hooks/custom/useSizeSelect/selectSizehook';
import { useCountSelect } from '@/components/commons/hooks/custom/useCountSelect/countSelecthook';
import ColorPicker from '@/components/commons/parts/colorpicker/colorpicker';
import { deepCopy } from '@/commons/utils/deepcopy';

interface IOptionSize {
  value: string;
  label: string;
  item: string;
  count: number;
  isdisabled: boolean;
  isPickerOpen: boolean;
}

export default function StocksComponent({ data }) {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  const { renderSizeSelect } = useSizeSelect();
  const { renderCountSelect } = useCountSelect();

  const removeItemStock = (e) => {
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // 제거대상인지 아닌지에 따라 reduce 메서드로 분할처리
    const { filtered, selected } = copyStock.reduce(
      (acc, stock) => {
        if (stock.item === e.target.id) {
          const a = acc.selected;
          a.push(stock);
          return acc;
        }
        const b = acc.filtered;
        b.push(stock);

        return acc;
      },
      {
        filtered: [],
        selected: [],
      }
    );

    const editedOption = copyOptionGroup.sizeOptions.map((opt) => {
      if (opt.label === selected[0].label)
        return {
          ...opt,
          count: 1,
          item: '',
          isPickerOpen: false,
          isdisabled: false,
        };
      return { ...opt };
    });

    setStocks(filtered);
    setOptions((prev) => {
      return { ...prev, sizeOptions: editedOption };
    });
  };

  return (
    <S.Stocks id={data.item}>
      <S.Select_Stock>
        <S.Stocks_Info>SIZE</S.Stocks_Info>
        {renderSizeSelect(data.item)}
        <S.Stocks_Info>COLOR</S.Stocks_Info>
        <ColorPicker data={data} />
        <S.Stocks_Info>COUNT</S.Stocks_Info>
        {renderCountSelect(data.item)}
      </S.Select_Stock>
      <S.Close onClick={removeItemStock} id={data.item}></S.Close>
    </S.Stocks>
  );
}
