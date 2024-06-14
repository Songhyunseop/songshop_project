import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';

import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useRef, useState } from 'react';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@tanstack/react-query';
import supabase from '@/commons/utils/supabase/client';
import {
  useThis,
  useUploadStorage,
  useUploadToStorage,
} from '@/components/commons/hooks/query/useQueryGetAllProducts';

const WriteEditor = dynamic(() => import('../../editor/writeeditor'), {
  ssr: false,
});

export default function AddItemModalContents() {
  interface IStockDataType {
    [key: string]: {
      label: string;
      item: string;
      count: number;
      color: string[];
    };
  }

  interface IOptionSize {
    value: string;
    label: string;
    item: string;
    count: number;
    isdisabled: boolean;
    isPickerOpen: boolean;
  }

  type IColorType = {
    color: string;
    item: string;
  };

  const selectedStocks: IStockDataType = {
    S: { label: 'SMALL', item: '', count: 1, color: [] },
    M: { label: 'MEDIUM', item: '', count: 1, color: [] },
    L: { label: 'LARGE', item: '', count: 1, color: [] },
  };

  const sizeOptions: IOptionSize[] = [
    {
      value: 'S',
      label: 'SMALL',
      item: '',
      count: 1,
      isdisabled: false,
      isPickerOpen: false,
    },
    {
      value: 'M',
      label: 'MEDIUM',
      item: '',
      count: 1,
      isdisabled: false,
      isPickerOpen: false,
    },
    {
      value: 'L',
      label: 'LARGE',
      item: '',
      count: 1,
      isdisabled: false,
      isPickerOpen: false,
    },
  ];

  const countOptions = [
    { label: '1개', value: 1 },
    { label: '2개', value: 2 },
    { label: '3개', value: 3 },
    { label: '4개', value: 4 },
    { label: '5개', value: 5 },
    { label: '6개', value: 6 },
    { label: '7개', value: 7 },
    { label: '8개', value: 8 },
    { label: '9개', value: 9 },
    { label: '10개', value: 10 },
  ];

  const [stockData, setStockData] = useState<IStockDataType>(selectedStocks);
  const [selectedOption, setSelectedOption] =
    useState<IOptionSize[]>(sizeOptions);
  const [color, setColor] = useColor('#561ecb');

  const [file, setFiles] = useState<File[]>();
  const editorRef = useRef<editorType>();

  const handleSizeChange = (select: IOptionSize, item: string) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];
    const size = select.value;

    const prevSelectSize = copiedOptions.find((el) => el.item === item)?.value;

    // api 전송용 객체의 데이터 값 변경
    if (prevSelectSize) {
      copiedStocks[prevSelectSize].item = '';
      copiedStocks[prevSelectSize].count = 1;
      copiedStocks[size].item = item;
    }

    // selectOption default 값 변경
    const newOptions = copiedOptions.map((option) => {
      if (option.value === prevSelectSize && option.item !== '')
        return { ...option, item: '', isdisabled: false };
      if (option.value === size) return { ...option, item, isdisabled: true };
      return { ...option };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const handleCountChange = (select, item: string) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];

    const selectOne = copiedOptions.find((el) => el.item === item);
    if (selectOne) copiedStocks[selectOne?.value].count = select.value;

    const newOptions = copiedOptions.map((option) => {
      if (option.item === selectOne?.item)
        return { ...option, count: select.value };
      return { ...option };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const addItemStock = () => {
    const newStockId = uuidv4();
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];

    const selectOne = copiedOptions.find((el) => el.isdisabled === false);

    // 체크 안된 사이즈 stock에 고유한 item코드 추가
    if (selectOne) copiedStocks[selectOne.value].item = newStockId;

    const newOptions = copiedOptions.map((option) => {
      if (option.value === selectOne?.value)
        return { ...option, item: newStockId, isdisabled: true };
      return { ...option };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const isRemainingSpace = () => {
    const remainingSpace = selectedOption.filter(
      (option) => option.item === ''
    );

    if (remainingSpace.length === 0) return false;
    return true;
  };

  const removeItemStock = (e) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];
    const selectedStockId = e.target.id;

    // select Option 에서 선택된 item과 같은 객체 검열
    const selectOne = copiedOptions.find((el) => el.item === selectedStockId);

    // 실제 api 호출에 보내지는 객체 data 값 변경
    if (selectOne) {
      copiedStocks[selectOne.value].item = '';
      copiedStocks[selectOne.value].count = 1;
      copiedStocks[selectOne.value].color = [];
    }

    // select Option default 값 변경 (메뉴 활성화 여부)
    const newOptions = copiedOptions.map((option) => {
      if (option.item === selectedStockId)
        return { ...option, item: '', isdisabled: false };

      return { ...option };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const openColorPick = (item) => {
    const copiedOptions = [...selectedOption];
    const newOptions = copiedOptions.map((el) => {
      if (el.item === item) return { ...el, isPickerOpen: !el.isPickerOpen };
      return { ...el, isPickerOpen: false };
    });

    setSelectedOption(newOptions);
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
  };

  const selectColor = (item) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];
    const selectOne = copiedOptions.find((el) => el.item === item);

    const colors = selectOne && copiedStocks[selectOne.value].color;
    const isDuplicated = colors?.some((c) => c === color.hex);

    if (isDuplicated) {
      alert('이미 선택한 색상입니다');
      return;
    }

    if (!isDuplicated && selectOne)
      copiedStocks[selectOne.value].color.unshift(color.hex);

    const newOptions = copiedOptions.map((el) => {
      if (el.item === item) return { ...el, isPickerOpen: false };
      return { ...el };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const removeColor = (item: string, color: string) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];
    const selectOne = copiedOptions.find((el) => el.item === item);

    if (selectOne) {
      const colors = selectOne && copiedStocks[selectOne.value]?.color;
      copiedStocks[selectOne.value].color = colors?.filter((c) => c !== color);
    }

    setStockData(copiedStocks);
  };

  const changeContent = () => {
    if (editorRef.current) {
      const textData = editorRef.current.getInstance().getHTML();
      console.log(textData);
    }
  };
  //
  //
  const uploadImgFileToStorage = async (file) => {
    console.log(file, '?');
    const newId = uuidv4();

    // const { data, error } = await supabaseClient.storage
    //   .from('images')
    //   .upload(`product/${newId}`, file);

    // return { data, error };
  };

  const { mutate } = useMutation(uploadImgFileToStorage);

  const uploadToStorage = async (file) => {
    console.log(file);
    const result = await mutate(file);
  };

  const handleFiles = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);

    // uploadToStorage(123);

    fileArray.forEach((file) => uploadToStorage(file));
  };

  return (
    <>
      <S.Modal_Header>상품추가</S.Modal_Header>
      <form>
        <S.Modal_Body>
          <S.Body_Container>
            <S.Body_Left>상품명</S.Body_Left>
            <S.Body_Right>
              <S.AddInput />
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>상품가격</S.Body_Left>
            <S.Body_Right>
              <S.AddInput />
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>상세내용</S.Body_Left>
            <S.Body_Right>
              <S.DetailText
                placeholder='상세내용을 입력하세요'
                maxLength={300}
              />
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>IMAGE</S.Body_Left>
            <S.Body_Right>
              <S.ThumbImages>
                <div style={{ border: '1px solid black' }}>Imgitem</div>
                <S.addImg htmlFor='imgInput'>업로드</S.addImg>
                <input
                  onChange={handleFiles}
                  id='imgInput'
                  type='file'
                  hidden
                />
              </S.ThumbImages>
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>카테고리</S.Body_Left>
            <S.Body_Right>
              <S.AddInput />
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>상세 카테고리</S.Body_Left>
            <S.Body_Right>
              <S.AddInput />
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>재고</S.Body_Left>
            <S.Body_Right>
              {selectedOption.map(
                (data) =>
                  data.item !== '' && (
                    <S.Stocks id={data.item} key={data.item}>
                      <S.Select_Stock>
                        <S.Stocks_Info>SIZE</S.Stocks_Info>
                        <S.Size_Select
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
                          value={{
                            value: data.label,
                            label: data.label,
                          }}
                          classNamePrefix={'SizeSelect'}
                          options={selectedOption}
                          isSearchable={false}
                          onChange={(select: unknown) =>
                            handleSizeChange(select as IOptionSize, data.item)
                          }
                          isOptionDisabled={(option: unknown) =>
                            (option as IOptionSize).isdisabled
                          }
                        />
                        <S.Stocks_Info>COLOR</S.Stocks_Info>
                        <S.Color_PickBox>
                          <S.Color_PickButton
                            onClick={() => openColorPick(data.item)}
                          ></S.Color_PickButton>
                          <S.ColorsList>
                            {stockData[data.value].color.map((c) => (
                              <S.Colors
                                key={uuidv4()}
                                onClick={() => removeColor(data.item, c)}
                                color={c}
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
                                <S.ColorPickBtn onClick={resetColor}>
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
                          value={{
                            value: data.count,
                            label: `${data.count}개`,
                          }}
                          classNamePrefix={'CountSelect'}
                          defaultValue={{ label: '1개', value: 1 }}
                          options={countOptions}
                          onChange={(select) =>
                            handleCountChange(select, data.item)
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
                        <S.Close
                          onClick={removeItemStock}
                          id={data.item}
                        ></S.Close>
                      </S.Select_Stock>
                    </S.Stocks>
                  )
              )}
              {isRemainingSpace() && (
                <S.AddItem type='button' onClick={addItemStock}>
                  재고추가
                </S.AddItem>
              )}
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>상품 디테일</S.Body_Left>
            <S.Body_Right>
              <WriteEditor
                changeContent={changeContent}
                editorRef={editorRef}
              />
            </S.Body_Right>
          </S.Body_Container>
          <S.Add_Button>상품등록</S.Add_Button>
        </S.Modal_Body>
      </form>
    </>
  );
}
