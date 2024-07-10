import { IOptionSize } from '@/commons/types/selectoption_type';

export const useSelect = (optiion) => {
  // OptionProps 에 change함수 바인딩
  const bindHandlerToProps = (changeFn) => {
    const defaultProps = {
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
      options: option,
      onChange: changeFn,
      isSearchable: false,
      isOptionDisabled: (option: IOptionSize) => option.isdisabled,
    };

    return defaultProps;
  };

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

  // 사이즈 변경 함수
  const handleSizeChange = (select: IOptionSize) => {
    const { value, label, item } = select;
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // 선택된 항목에 입력값에 맞게 데이터 수정
    const selected = copyStock.find((stock: ISelected) => stock.item === item);
    const targetIdx = stocks.findIndex((stock) => stock.item === item);

    const editedData = {
      ...(selected as ISelected),
      value,
      label,
      isdisabled: true,
    };

    copyStock[targetIdx] = editedData;
    setStocks(copyStock);

    // 옵션값(isDisabled) 수정
    if (selected.label !== '') {
      const editedOption = copyOptionGroup.sizeOptions.map((opt) => {
        if (opt.label === selected.label) return { ...opt, isdisabled: false };
        if (opt.label === label) return { ...opt, isdisabled: true };
        return { ...opt };
      });

      setOptions((prev) => {
        return { ...prev, sizeOptions: editedOption };
      });
    }
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

  return {
    bindHandlerToProps,
    handleCategoryChange,
    handleCountChange,
    handleSizeChange,
  };
};
