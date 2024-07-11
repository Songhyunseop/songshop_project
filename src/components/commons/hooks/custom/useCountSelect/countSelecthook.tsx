import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { deepCopy } from '@/commons/utils/deepcopy';
import CustomSelect from '@/components/commons/parts/select';
import { useRecoilState } from 'recoil';

export const useCountSelect = () => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  const [copyStocks, copyOptionGroup] = deepCopy([stocks, options]);

  const SelectProps = {
    classNamePrefix: 'CountSelect',
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
    options: options.countOptions,
    onChange: null,
    isOptionDisabled: (option) => option.isdisabled,
  };

  const handleCountChange = ({ select, id }) => {
    const { value } = select;

    // sotck 데이터 갱신
    const selected = copyStocks.find((stock) => stock.item === id);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === id);

    selected.count = value;
    copyStocks[targetIdx] = selected;

    setStocks(copyStocks);

    // option 상태 변경
    copyOptionGroup.countOptions.forEach((opt) =>
      opt.value === value ? (opt.isdisabled = true) : (opt.isdisabled = false)
    );

    setOptions(copyOptionGroup);
  };

  const renderCountSelect = (id) => {
    return (
      <CustomSelect
        {...{
          ...SelectProps,
          onChange: (select) => handleCountChange({ select, id }),
        }}
      />
    );
  };

  return { renderCountSelect };
};
