import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';

import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useRef, useState } from 'react';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useGetPublicUrl,
  useUploadToStorage,
} from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { deepCopy } from '@/commons/utils/deepcopy';
import Select from 'react-select/dist/declarations/src/Select';
import { GroupBase } from 'react-select';
import ItemInfo from './iteminfo';
import {
  CategoryOptions,
  countOptions,
  sizeOptions,
} from '@/components/commons/constants/constants';
import UploadImageComponent from './imageUpload';
import CustomSelect from '../../../select';

const WriteEditor = dynamic(() => import('../../../editor/writeeditor'), {
  ssr: false,
});

export default function AddItemModalContents() {
  interface IOptionSize {
    value: string;
    label: string;
    item: string;
    count: number;
    isdisabled: boolean;
    isPickerOpen: boolean;
  }

  // interface ISubCategory {
  //   main: string;
  //   label: string;
  //   name: string;
  //   isdisabled: boolean;
  // }

  // interface ICategoryProps {
  //   label: string;
  //   isdisabled: boolean;
  //   name: string;
  //   subCategory: ISubCategory[];
  // }
  interface ISelected {
    value: string;
    label: string;
    item: string;
    count: number;
    isdisabled: boolean;
    isPickerOpen: boolean;
  }

  const OptionsData = { sizeOptions, countOptions, CategoryOptions };

  const defaultStockData = {
    value: '',
    label: '',
    item: '',
    count: 1,
    selectColor: [],
    isdisabled: false,
    isPickerOpen: false,
  };

  const [stocks, setStocks] = useState([]);
  const [options, setOptions] = useState(OptionsData);

  const [color, setColor] = useColor('#561ecb');

  const editorRef = useRef<editorType>();
  const subCategoryRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const handleSizeChange = (select: IOptionSize) => {
    const { value, label, item: itemId } = select;
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // 선택된 항목에 입력값에 맞게 데이터 수정
    const selected = copyStock.find(
      (stock: ISelected) => stock.item === itemId
    );
    const targetIdx = stocks.findIndex((stock) => stock.item === itemId);

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

      return;
    }

    const editedOption = copyOptionGroup.sizeOptions.map((opt) => {
      return opt.label === select.label
        ? { ...opt, isdisabled: true }
        : { ...opt };
    });

    setOptions((prev) => {
      return { ...prev, sizeOptions: editedOption };
    });
  };

  const handleCountChange = (select) => {
    const [copyStocks] = deepCopy([stocks]);
    const { item, value } = select;

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    selected.count = value;

    copyStocks[targetIdx] = selected;
    setStocks(copyStocks);
  };

  const addItemStock = () => {
    const newStockId = uuidv4();
    const [stockData] = deepCopy([defaultStockData]);

    stockData.item = newStockId;
    setStocks((prev) => [...prev, stockData]);
  };

  const isRemainingSpace = () => {
    const copiedOption = structuredClone(options);

    const remainingSpace = copiedOption.sizeOptions.filter(
      (option) => option.item === ''
    );
    if (remainingSpace.length === 0) return false;
    return true;
  };

  const removeItemStock = (e) => {
    const [copyStock, copyOptionGroup] = deepCopy([stocks, options]);

    // 제거대상인지 아닌지에 따라 reduce 메서드로 분할처리
    const { filtered, selected } = copyStock.reduce(
      (acc, stock) => {
        if (stock.item === e.target.id) {
          const a = acc.selected;
          a.push(stock);
        }
        if (stock.item !== e.target.id) {
          const b = acc.filtered;
          b.push(stock);
        }
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
          count: 1,
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

  const toggleColorPick = (item) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    if (selected.label === '') {
      alert('사이즈를 먼저 선택해주세요');
      return;
    }

    copyStocks[targetIdx] = {
      ...selected,
      isPickerOpen: !selected.isPickerOpen,
    };

    setStocks(copyStocks);
  };

  const selectColor = (item) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const isDuplicate = selected.selectColor.some(
      (itemColor) => itemColor === color.hex
    );

    if (isDuplicate) {
      alert('이미 선택된 색상입니다');
      return;
    }

    // 선택 색상 추가하고 색상창 닫기
    selected.selectColor.push(color.hex);
    selected.isPickerOpen = false;

    copyStocks[targetIdx] = selected;
    setStocks(copyStocks);
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
  };

  const removeColor = (item: string, color: string) => {
    const [copyStocks] = deepCopy([stocks]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const filterdColors = selected.selectColor.filter((c) => c !== color);

    selected.selectColor = filterdColors;
    copyStocks[targetIdx] = selected;

    setStocks(copyStocks);
  };

  // editor 입력값 핸들링
  const changeContent = () => {
    if (editorRef.current) {
      const textData = editorRef.current.getInstance().getHTML();
      console.log(textData);
    }
  };

  const { mutateAsync: uploadFiles } = useUploadToStorage();
  const { mutateAsync: getPublicUrl } = useGetPublicUrl();

  const submitBoard = async (file) => {
    // console.log(fileList[0].name);
    try {
      const uploadResult = await uploadFiles(file);
      const { url } = await getPublicUrl(uploadResult.data.path);

      // setUploadImgUrl((prev) => [url, ...prev]);
      // setFilesList((filesList) => [file, ...filesList]);
    } catch (e) {
      console.log(e);
    }
  };

  const changeCategory = (e) => {
    //clearValue 실행으로 인한 트리거 처리
    if (!e) return;

    const [copyOptionGroup] = deepCopy([options]);

    if (e.name === 'mainCategory') {
      const newOptions = copyOptionGroup.CategoryOptions.map((category) => {
        if (category.label === e.label)
          return { ...category, isdisabled: true };
        else return { ...category, isdisabled: false };
      });

      setOptions((prev) => {
        return { ...prev, CategoryOptions: newOptions };
      });

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

  const returnSubCategoryOpts = () => {
    // 선택된 MainCategory options를 통해 이에 할당된 subCategory options를 반환
    const checked = options.CategoryOptions.filter(
      (opt) => opt.isdisabled === true
    )[0];

    return checked ? checked?.subCategory : [];
  };

  const categoryprops = {
    classNamePrefix: 'CategorySelect',
    options: CategoryOptions,
    placeholder: '카테고리를 선택하세요',
    isSearchable: false,
    onChange: changeCategory,
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
  };

  const subCategoryProps = {
    ref: subCategoryRef,
    classNamePrefix: 'SubCategorySelect',
    options: returnSubCategoryOpts(),
    placeholder: '카테고리를 선택하세요',
    isSearchable: false,
    onChange: changeCategory,
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
  };

  return (
    <>
      <S.Modal_Header>상품추가</S.Modal_Header>
      <form>
        <S.Modal_Body>
          <ItemInfo title={'상품명'} />
          <ItemInfo title={'상품가격'} />
          <ItemInfo title={'상세내용'} isCustom>
            <S.DetailText placeholder='상세내용을 입력하세요' maxLength={300} />
          </ItemInfo>
          <ItemInfo title={'IMAGE'} isCustom>
            <UploadImageComponent />
          </ItemInfo>
          <ItemInfo title={'카테고리'} isCustom>
            <CustomSelect
              option={{ ...categoryprops }}
              type={'CategorySelect'}
            />
          </ItemInfo>
          <ItemInfo title={'상세 카테고리'} isCustom>
            <CustomSelect
              option={{ ...subCategoryProps }}
              type={'subCategorySelect'}
            />
          </ItemInfo>
          <S.Body_Container>
            <S.Body_Left>재고</S.Body_Left>
            <S.Body_Right>
              {stocks.map((data) => (
                <S.Stocks id={data.item} key={data.item}>
                  <S.Select_Stock>
                    <S.Stocks_Info>SIZE</S.Stocks_Info>
                    <S.Size_Select
                      placeholder={'사이즈 선택'}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: '1px solid black',
                          boxShadow: 'none',
                          '&:hover': {
                            border: '1px solid black',
                          },
                        }),
                      }}
                      classNamePrefix={'SizeSelect'}
                      options={options.sizeOptions}
                      isSearchable={false}
                      onChange={(select) =>
                        handleSizeChange({
                          ...(select as IOptionSize),
                          item: data.item,
                        })
                      }
                      isOptionDisabled={(option) =>
                        (option as IOptionSize).isdisabled
                      }
                    />
                    <S.Stocks_Info>COLOR</S.Stocks_Info>
                    <S.Color_PickBox>
                      <S.Color_PickButton
                        onClick={() => toggleColorPick(data.item)}
                      ></S.Color_PickButton>
                      <S.ColorsList>
                        {data.selectColor?.map((color) => (
                          <S.Colors
                            key={uuidv4()}
                            onClick={() => removeColor(data.item, color)}
                            color={color}
                          ></S.Colors>
                        ))}
                      </S.ColorsList>
                      {data.isPickerOpen && (
                        <S.Custom_Color_Layout>
                          <Saturation
                            height={180}
                            color={color}
                            onChange={setColor}
                          />
                          <Hue color={color} onChange={setColor} />
                          <S.ColorBtn_Box>
                            <S.ColorPickBtn
                              type='button'
                              onClick={() => selectColor(data.item)}
                            >
                              <FontAwesomeIcon
                                style={{
                                  width: '15px',
                                  height: '15px',
                                }}
                                icon={faCheck}
                              />
                            </S.ColorPickBtn>
                            <S.ColorPickBtn type='button' onClick={resetColor}>
                              <FontAwesomeIcon
                                style={{
                                  width: '15px',
                                  height: '15px',
                                }}
                                icon={faRotateLeft}
                              />
                            </S.ColorPickBtn>
                          </S.ColorBtn_Box>
                        </S.Custom_Color_Layout>
                      )}
                    </S.Color_PickBox>
                    <S.Stocks_Info>COUNT</S.Stocks_Info>
                    <S.Count_Select
                      placeholder={'수량 선택'}
                      classNamePrefix={'CountSelect'}
                      options={countOptions}
                      onChange={(select) =>
                        handleCountChange({ ...select, item: data.item })
                      }
                      isSearchable={false}
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: '1px solid black',
                          boxShadow: 'none',
                          '&:hover': {
                            border: '1px solid black',
                          },
                        }),
                      }}
                    />
                  </S.Select_Stock>
                  <S.Close onClick={removeItemStock} id={data.item}></S.Close>
                </S.Stocks>
              ))}
              {isRemainingSpace() && (
                <S.AddItem type='button' onClick={addItemStock}>
                  재고추가
                </S.AddItem>
              )}
            </S.Body_Right>
          </S.Body_Container>
          <ItemInfo title={'상품 디테일'} isCustom>
            <WriteEditor changeContent={changeContent} editorRef={editorRef} />
          </ItemInfo>
          <S.Add_Button>상품등록</S.Add_Button>
        </S.Modal_Body>
      </form>
    </>
  );
}
