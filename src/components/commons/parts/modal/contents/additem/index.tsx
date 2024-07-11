import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';

import { ColorService, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useRef, useState } from 'react';
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
import StocksComponent from './stocks';
import { useRecoilState } from 'recoil';
import { optionDataState, stocksState } from '@/commons/libraries/atom';

// editor 컴포넌트 클라이언트 측에서 렌더링
const WriteEditor = dynamic(() => import('../../../editor/writeeditor'), {
  ssr: false,
});

export default function AddItemModalContents() {
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

  const defaultStockData = {
    value: '',
    label: '',
    item: '',
    count: 1,
    selectColor: [],
    isdisabled: false,
    isPickerOpen: false,
  };

  const [stocks, setStocks] = useRecoilState(stocksState);
  const [options, setOptions] = useRecoilState(optionDataState);

  const [color, setColor] = useColor('#561ecb');

  const editorRef = useRef<editorType>();
  const subCategoryRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const addItemStock = () => {
    const newStockId = uuidv4();
    const [stockData] = deepCopy([defaultStockData]);

    stockData.item = newStockId;
    setStocks((prev) => [...prev, stockData]);
  };

  const isRemainingSpace = () => {
    const [copyOptionGroup] = deepCopy([options]);

    const remainingSpace = copyOptionGroup.sizeOptions.filter(
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

  const returnSubCategoryOpts = () => {
    // 선택된 MainCategory options를 통해 이에 할당된 subCategory options를 반환
    const checked = options.CategoryOptions.filter(
      (opt) => opt.isdisabled === true
    )[0];

    return checked ? checked?.subCategory : [];
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
            {/* <CustomSelect
              option={{ ...categoryprops }}
              type={'CategorySelect'}
            /> */}
          </ItemInfo>
          <ItemInfo title={'상세 카테고리'} isCustom>
            {/* <CustomSelect
              option={{ ...subCategoryProps }}
              type={'subCategorySelect'}
            /> */}
          </ItemInfo>
          <ItemInfo title={'재고'} isCustom>
            {stocks.map((data) => (
              <StocksComponent key={data.item} data={data} />
            ))}
            {isRemainingSpace() && (
              <S.AddItem type='button' onClick={addItemStock}>
                재고추가
              </S.AddItem>
            )}
          </ItemInfo>
          <ItemInfo title={'상품 디테일'} isCustom>
            <WriteEditor changeContent={changeContent} editorRef={editorRef} />
          </ItemInfo>
          <S.Add_Button>상품등록</S.Add_Button>
        </S.Modal_Body>
      </form>
    </>
  );
}
