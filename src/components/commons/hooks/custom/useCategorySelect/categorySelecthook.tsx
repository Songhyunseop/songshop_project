import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { IOptionSize } from '@/commons/types/selectoption_type';
import { deepCopy } from '@/commons/utils/deepcopy';
import CustomSelect from '@/components/commons/parts/select';
import { useRecoilState } from 'recoil';

export const useCategorySelect = (subRef) => {
  const [options, setOptions] = useRecoilState(optionDataState);

  const [copyOptionGroup] = deepCopy([options]);

  const SelectProps = {
    // menuIsOpen: true,
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
    classNamePrefix: 'CategorySelect',
    options: null,
    onchange: null,
    isSearchable: false,
    isOptionDisabled: (option: IOptionSize) => option.isdisabled,
  };

  const handleCategoryChange = (select) => {
    //clearValue 실행으로 인한 트리거 처리
    if (!select) return;

    if (select.name === 'mainCategory') {
      copyOptionGroup.CategoryOptions.forEach((opt) =>
        opt.label === select.label
          ? (opt.isdisabled = true)
          : (opt.isdisabled = false)
      );

      setOptions(copyOptionGroup);

      // 현재 서브카테고리에 담긴 선택값을 초기화
      if (subRef.current) subRef.current.clearValue();

      return;
    }

    if (select.name === 'subCategory') {
      const selectMain = copyOptionGroup.CategoryOptions.find(
        (opt) => opt.label === select.main
      );

      selectMain.subCategory.forEach((opt) =>
        opt.label === select.label
          ? (opt.isdisabled = true)
          : (opt.isdisabled = false)
      );

      setOptions(copyOptionGroup);
    }
  };

  const getsubCategoryList = () => {
    // 선택된 MainCategory options를 통해 이에 할당된 subCategory options를 반환
    const checked = copyOptionGroup.CategoryOptions.filter(
      (opt) => opt.isdisabled === true
    )[0];
    return checked ? checked?.subCategory : [];
  };

  const renderCategorySelect = (isSub: boolean) => {
    return (
      <CustomSelect
        {...{
          ...SelectProps,
          onChange: handleCategoryChange,
          ref: isSub ? subRef : null,
          options: isSub
            ? getsubCategoryList()
            : copyOptionGroup.CategoryOptions,
        }}
      />
    );
  };

  return { renderCategorySelect };
};
