import { optionDataState } from '@/commons/libraries/atom';
import { IOptionSize } from '@/commons/types/selectoption_type';
import { deepCopy } from '@/commons/utils/deepcopy';
import { useRef } from 'react';
import { GroupBase } from 'react-select';
import Select from 'react-select/dist/declarations/src/Select';
import { useRecoilState } from 'recoil';

export const useCategorySelect = () => {
  const [options, setOptions] = useRecoilState(optionDataState);
  const [copyOptionGroup] = deepCopy([options]);

  const subCategoryRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const selectProps = {
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
    placeholder: '선택하세요',
    options: null,
    onChange: null,
    isSearchable: false,
    isOptionDisabled: (option: IOptionSize) => option.isdisabled,
  };

  const handleCategoryChange = ({ select }) => {
    // //clearValue 실행으로 인한 트리거 처리

    if (!select) return;

    if (select.name === 'mainCategory') {
      copyOptionGroup.CategoryOptions.forEach((opt) => {
        if (opt.label === select.label && !opt.isdisabled) {
          opt.isdisabled = true;
          return;
        }

        opt.isdisabled = false;
        opt.subCategory.forEach((opt) => (opt.isdisabled = false));
      });

      //   // 현재 서브카테고리에 담긴 선택값을 초기화
      if (subCategoryRef && subCategoryRef.current)
        subCategoryRef.current.clearValue();

      setOptions(copyOptionGroup);
      return;
    }
    if (select.name === 'subCategory') {
      const selectMain = copyOptionGroup.CategoryOptions.find(
        (opt) => opt.label === select.main
      );
      selectMain.subCategory.forEach((opt) => {
        opt.isdisabled = opt.label === select.label;
      });
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

  // Props
  const categoryProps = {
    ...selectProps,
    selectType: 'category',
    options: copyOptionGroup.CategoryOptions,
    onChange: handleCategoryChange,
  };

  const subCategoryProps = {
    ...selectProps,
    selectType: 'subCategory',
    options: getsubCategoryList(),
    onChange: handleCategoryChange,
  };

  return { categoryProps, subCategoryProps, subCategoryRef };
};
