import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { deepCopy } from '@/commons/utils/deepcopy';
import { useRecoilState } from 'recoil';

export const useSizeSelect = (stockIndex) => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

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
    classNamePrefix: 'SizeSelect',
    placeholder: '선택',
    options: options.sizeOptions,
    isSearchable: false,
    isOptionDisabled: (option) => option.isdisabled,
  };

  const handleSizeChange = ({ select, stockId }) => {
    const { value, label, item } = select;
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // stock 데이터 갱신
    const prevSelect = copyStock.find(
      (stock: ISelected) => stock.item === stockId
    );
    const targetIdx = stocks.findIndex((stock) => stock.item === stockId);

    const editedData = {
      ...(prevSelect as ISelected),
      value,
      label,
      isdisabled: true,
    };
    copyStock[targetIdx] = editedData;
    setStocks(copyStock);

    // 옵션값(isDisabled) 수정
    const prev = copyOptionGroup.sizeOptions.find(
      (opt) => opt.label === prevSelect.label
    );
    const current = copyOptionGroup.sizeOptions.find(
      (opt) => opt.label === label
    );
    if (prevSelect.label === '') {
      current.isdisabled = true;
      setOptions(copyOptionGroup);
      return;
    }
    prev.isdisabled = false;
    current.isdisabled = true;
    setOptions(copyOptionGroup);
  };

  // Props
  const sizeSelectProps = {
    ...SelectProps,
    selectType: `stocks[${stockIndex}].size`,
    subRef: null,
    onChange: handleSizeChange,
  };

  return { sizeSelectProps };
};
