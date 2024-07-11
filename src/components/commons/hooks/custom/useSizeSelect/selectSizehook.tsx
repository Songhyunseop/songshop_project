import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { deepCopy } from '@/commons/utils/deepcopy';
import CustomSelect from '@/components/commons/parts/select';
import { useRecoilState } from 'recoil';

export const useSizeSelect = () => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  const SelectProps = {
    placeholder: '선택하세요',
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
    isSearchable: false,
    options: options.sizeOptions,
    onChange: null,
    isOptionDisabled: (option) => option.isdisabled,
  };

  const handleSizeChange = ({ select, id }) => {
    const { value, label, item } = select;
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // stock 데이터 저장
    const prevSelect = copyStock.find((stock: ISelected) => stock.item === id);
    const targetIdx = stocks.findIndex((stock) => stock.item === id);

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

  //
  //

  const renderSizeSelect = (type, id) => {
    return (
      <CustomSelect
        {...{
          ...SelectProps,
          classNamePrefix: type,
          onChange: (select) => handleSizeChange({ select, id }),
        }}
      />
    );
  };

  return { renderSizeSelect };
};
