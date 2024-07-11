import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { IOptionSize } from '@/commons/types/selectoption_type';
import { deepCopy } from '@/commons/utils/deepcopy';
import { useRecoilState } from 'recoil';
import CustomSelect from '@/components/commons/parts/select';
import { sizeOptions } from '@/components/commons/constants/constants';

export const useSelect = () => {
  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  // 카운트 변경함수
  const handleCountChange = (select) => {
    const [copyStocks] = deepCopy([stocks]);
    const { value, label, item } = select;

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    selected.count = value;

    copyStocks[targetIdx] = selected;
    setStocks(copyStocks);
  };

  // 카테고리 변경함수
  const handleCategoryChange = (e) => {
    //clearValue 실행으로 인한 트리거 처리
    if (!e) return;

    const [copyOptionGroup] = deepCopy([options]);

    if (e.name === 'mainCategory') {
      const newOptions = copyOptionGroup.CategoryOptions.map((category) => {
        if (category.label === e.label)
          return { ...category, isdisabled: true };
        return { ...category, isdisabled: false };
      });

      setOptions((prev) => {
        return { ...prev, CategoryOptions: newOptions };
      });

      // 현재 서브카테고리에 담긴 선택값을 초기화
      if (subCategoryRef.current) subCategoryRef.current.clearValue();
    }

    if (e.name === 'subCategory') {
      const newOptions = copyOptionGroup.CategoryOptions.map((category) => {
        if (category.label === e.main) {
          const subCategory = category.subCategory.map((opt) => {
            return opt.label === e.label
              ? { ...opt, isdisabled: true }
              : { ...opt };
          });
          return { ...category, subCategory };
        }
        return { ...category };
      });

      setOptions((prev) => {
        return { ...prev, CategoryOptions: newOptions };
      });
    }
  };

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
    classNamePrefix: null,
    options: null,
    onchange: null,
    isSearchable: false,
    isOptionDisabled: (option: IOptionSize) => option.isdisabled,
  };

  return {};
};
