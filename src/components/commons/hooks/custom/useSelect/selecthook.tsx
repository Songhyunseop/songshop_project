import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { IOptionSize } from '@/commons/types/selectoption_type';
import { deepCopy } from '@/commons/utils/deepcopy';
import { useRecoilState } from 'recoil';

export const useSelect = () => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  // 카테고리 변경함수

  const SelectProps = {
    placeholder: '선택',
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
    classNamePrefix: null,
    options: null,
    onchange: null,
    isSearchable: false,
    isOptionDisabled: (option: IOptionSize) => option.isdisabled,
  };

  return {};
};
