import { countOptionState, stocksState } from '@/commons/libraries/atom';
import { deepCopy } from '@/commons/utils/deepcopy';
import { useRecoilState } from 'recoil';

export const useCountSelect = (stockIndex) => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(countOptionState);

  const [copyStocks] = deepCopy([stocks]);

  const SelectProps = {
    styles: {
      control: (base) => ({
        ...base,
        border: '1px solid black',
        boxShadow: 'none',
        '&:hover': {
          border: '1px solid black',
        },
      }),
    },
    classNamePrefix: 'CountSelect',
    placeholder: '선택',
    options: options[stockIndex],
    isSearchable: false,
    onChange: null,
    isOptionDisabled: (option) => option.isdisabled,
  };

  const handleCountChange = ({ select, stockId }) => {
    const { value: newCount } = select;

    // stock 데이터 갱신
    const prevSelect = copyStocks.find((stock) => stock.item === stockId);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === stockId);

    const selectOptions = deepCopy([options[stockIndex]])[0];

    selectOptions.forEach((opt) => {
      if (opt.value === newCount) opt.isdisabled = true;
      if (opt.value === prevSelect.count) opt.isdisabled = false;
    });

    // select Option 값 갱신
    setOptions((prev) => {
      const newOption = [...prev];
      newOption[stockIndex] = selectOptions;
      return newOption;
    });

    // 이전 값 최근 값으로 갱신
    prevSelect.count = newCount;
    copyStocks[targetIdx] = prevSelect;

    setStocks(copyStocks);
  };

  const countSelectProps = {
    ...SelectProps,
    selectType: `stocks[${stockIndex}].count`,
    subRef: null,
    onChange: handleCountChange,
  };

  return { countSelectProps };
};
