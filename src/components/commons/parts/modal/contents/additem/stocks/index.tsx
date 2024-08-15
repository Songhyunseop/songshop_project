import * as S from './styles';

import { useRecoilState } from 'recoil';
import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { useSizeSelect } from '@/components/commons/hooks/custom/useSizeSelect/selectSizehook';
import { useCountSelect } from '@/components/commons/hooks/custom/useCountSelect/countSelecthook';
import ColorPicker from '@/components/commons/parts/colorpicker/colorpicker';
import { deepCopy } from '@/commons/utils/deepcopy';
import CustomSelect from '@/components/commons/parts/select';
import { useEffect } from 'react';

export default function StocksComponent({ stock, register }) {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  const { sizeSelectProps } = useSizeSelect(stock.index);
  const { countSelectProps } = useCountSelect(stock.index);

  useEffect(() => {
    register();
  }, []);

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
    <S.Stocks id={stock.item}>
      <S.Select_Stock>
        <S.Stocks_Info>SIZE</S.Stocks_Info>
        <CustomSelect {...sizeSelectProps} stockId={stock.item} />
        <S.Stocks_Info>COLOR</S.Stocks_Info>
        <ColorPicker stock={stock} />
        <S.Stocks_Info>COUNT</S.Stocks_Info>
        <CustomSelect {...countSelectProps} stockId={stock.item} />
      </S.Select_Stock>
      <S.Close onClick={removeItemStock} id={stock.item}></S.Close>
    </S.Stocks>
  );
}
