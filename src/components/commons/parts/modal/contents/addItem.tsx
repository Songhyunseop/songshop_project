import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useCallback, useState } from 'react';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    isdisabled: boolean;
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
    { value: 'S', label: 'small', item: '', isdisabled: false },
    { value: 'M', label: 'medium', item: '', isdisabled: false },
    { value: 'L', label: 'Large', item: '', isdisabled: false },
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
  const [pickerState, setPickerState] = useState([]);
  const [colorList, setColorList] = useState<IColorType[]>([]);

  // 객체 배열 변환 함수 (재사용성)
  const getStocksByArray = (data: IStockDataType) => {
    const dataArr = Object.entries(data).map(([val, detail]) => ({
      size: val,
      item: detail.item,
      label: detail.label,
      count: detail.count,
    }));

    return dataArr;
  };

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
    const newOptions = copiedOptions.map((el) => {
      if (el.value === prevSelectSize && el.item !== '')
        return { ...el, item: '', isdisabled: false };
      if (el.value === size) return { ...el, item, isdisabled: true };
      return { ...el };
    });

    setStockData(copiedStocks);
    setSelectedOption(newOptions);
  };

  const handleCountChange = (select, item: string) => {
    const copiedStocks = structuredClone(stockData);
    const copiedOptions = [...selectedOption];

    const selectOne = copiedOptions.find((el) => el.item === item);
    if (selectOne) copiedStocks[selectOne?.value].count = select.value;

    console.log(1111);
    // console.log(select);
    console.log(copiedStocks);
    console.log(copiedOptions);
    console.log(1111);

    setStockData(copiedStocks);
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

  const clickOpenOrClose = (e) => {
    // 색상 선택 버튼을 클릭 시 로직

    if (e.isOpen) {
      const CopiedOptions = structuredClone(options);

      for (const option of CopiedOptions) {
        if (
          !option.color.some((el) => el === color.hex) &&
          option.item === e.item
        )
          option.color.unshift(color.hex);
      }

      // setOptions(CopiedOptions);
      setPickerState({ ...e, isOpen: !e.isOpen });

      const isSameColor = colorList.some((el) => el.color === color.hex);
      if (isSameColor) {
        alert('같은 색상을 담을 수 없습니다');
        return;
      }

      //stocks의 id값을 활용해서 배열 형식 만들어 색상 목록 구별하자!

      return;
    }

    // ColorPicker 여는 버튼 클릭 시 로직

    const openColorPicker = () => {
      console.log(e);
      const isChecked = options.find((opt) => opt.item === e.item);

      if (!isChecked) {
        alert('사이즈를 먼저 체크해주세요');
        return;
      }

      setPickerState({ ...e, isOpen: !e.isOpen });
    };

    openColorPicker();
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
  };

  const removeColor = (item: string, color: string) => {
    // const CopiedOptions: IStockDataType[] = structuredClone(options);

    const selectedOption = CopiedOptions?.find(
      (el) => el.item === item
    ) as IStockDataType;

    selectedOption.color = selectedOption.color.filter((el) => el !== color);

    for (const [index, option] of CopiedOptions.entries()) {
      if (option.item === item) CopiedOptions[index] = selectedOption;
    }

    // setOptions(CopiedOptions);
  };

  // 렌더링 횟수 제한 로직
  const handleButtonClick = useCallback(
    (item) => () => {
      clickOpenOrClose(item);
    },
    [clickOpenOrClose]
  );

  return (
    <>
      <S.Modal_Header>상품추가</S.Modal_Header>
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
            <S.DetailText placeholder='상세내용을 입력하세요' maxLength={300} />
          </S.Body_Right>
        </S.Body_Container>
        <S.Body_Container>
          <S.Body_Left>IMAGE</S.Body_Left>
          <S.Body_Right></S.Body_Right>
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
            {getStocksByArray(stockData).map(
              (data) =>
                data.item !== '' && (
                  <S.Stocks key={data.item}>
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
                          onClick={handleButtonClick(data.item)}
                        ></S.Color_PickButton>
                        {/* {options
                      .find((el) => el.item === item)
                      ?.color.map((c) => (
                        <S.Colors
                          key={uuidv4()}
                          onClick={() => removeColor(item, c)}
                          color={c}
                        ></S.Colors>
                      ))} */}
                        {pickerState.isOpen &&
                          pickerState.item === data.item && (
                            <S.Custom_Color_Layout>
                              <Saturation
                                height={180}
                                color={color}
                                onChange={setColor}
                              />
                              <Hue color={color} onChange={setColor} />
                              <S.ColorBtn_Box>
                                <S.ColorPickBtn
                                  onClick={() =>
                                    clickOpenOrClose({
                                      item: data.item,
                                      isOpen: pickerState.isOpen,
                                    })
                                  }
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
                    </S.Select_Stock>
                    <S.Close onClick={removeItemStock} id={data.item}></S.Close>
                  </S.Stocks>
                )
            )}
            {isRemainingSpace() && (
              <S.AddItem onClick={addItemStock}>재고추가</S.AddItem>
            )}
          </S.Body_Right>
        </S.Body_Container>
        <S.Body_Container>
          <S.Body_Left>상품 디테일</S.Body_Left>
          <S.Body_Right>
            <S.AddInput detail={true} />
          </S.Body_Right>
        </S.Body_Container>
        <S.Add_Button>상품등록</S.Add_Button>
      </S.Modal_Body>
    </>
  );
}
