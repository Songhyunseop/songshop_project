import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useCallback, useState } from 'react';
import { faCheck, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AddItemModalContents() {
  interface IOptionProps {
    value: string;
    label: string;
    isdisabled: boolean;
  }

  type IColorType = {
    color: string;
    item: string;
  };

  interface OptionType {
    value: string;
    label: string;
    item: string;
    color: string[];
    isdisabled: boolean;
  }

  const optionObj = [
    { value: 'S', label: 'small', item: '', color: [], isdisabled: false },
    { value: 'M', label: 'medium', item: '', color: [], isdisabled: false },
    { value: 'L', label: 'Large', item: '', color: [], isdisabled: false },
  ];

  const [options, setOptions] = useState<OptionType[]>(optionObj);
  const [stocks, setStocks] = useState<string[]>([]);

  const [color, setColor] = useColor('#561ecb');
  const [pickerState, setPickerState] = useState([]);

  const [colorList, setColorList] = useState<IColorType[]>([]);

  const handleOptionChange = (select: IOptionProps, item: string) => {
    const copiedOptions = structuredClone(options);

    const selectedLabel = copiedOptions.find(
      (opt) => opt.value === select?.value
    )?.label;

    const newSelectOptions = copiedOptions.map((el) => {
      if (el.label !== selectedLabel && el.item === item)
        return { ...el, item: '', isdisabled: false };

      if (el.label === selectedLabel) return { ...el, isdisabled: true, item };
      return el;
    });

    setOptions(newSelectOptions);
  };

  const addItemStock = () => {
    const newStockId = uuidv4();

    const stocksList = [...stocks];
    stocksList.push(newStockId);
    setStocks(stocksList);
  };

  const removeItemStock = (e) => {
    const selectedStockId = e.target.id;

    // 배열 내 현재 아이템 제거
    const stocksList = [...stocks];
    const remainStockList = stocksList.filter((id) => id !== selectedStockId);

    // 현재 아이템과 일치하는 옵션 선택 및 초기화
    const newOptions = structuredClone(options);
    const selectedOne = newOptions.find((opt) => opt.item === selectedStockId);

    const selectIndex = newOptions.findIndex(
      (opt) => opt.item === selectedStockId
    );

    if (selectedOne && selectIndex !== -1) {
      selectedOne.item = '';
      selectedOne.color = [];
      selectedOne.isdisabled = false;

      newOptions[selectIndex] = selectedOne;
    }

    setStocks(remainStockList);
    setOptions(newOptions);
  };

  const clickOpenOrClose = (e) => {
    console.log(111);
    console.log(options);
    console.log(111);

    // 색상 선택 버튼을 클릭 시 로직

    if (e.isOpen) {
      const CopiedOptions = structuredClone(options);

      for (const option of CopiedOptions) {
        if (
          !option.color.some((el) => el === color.hex) &&
          option.item === e.item
        )
          option.color.push(color.hex);
      }

      setOptions(CopiedOptions);
      setPickerState({ ...e, isOpen: !e.isOpen });

      const isSameColor = colorList.some((el) => el.color === color.hex);
      if (isSameColor) {
        alert('같은 색상을 담을 수 없습니다');
        return;
      }

      //stocks의 id값을 활용해서 배열 형식 만들어 색상 목록 구별하자!

      console.log(123);
      console.log(stocks);
      console.log(colorList);

      // const aa = setColorList((prev) => [
      //   ...prev,
      //   { color: color.hex, item: e.item },
      // ]);

      return;
    }

    // ColorPicker 여는 버튼 클릭 시 로직

    const openColorPicker = () => {
      console.log(options);
      console.log('sll');
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
    const CopiedOptions: OptionType[] = structuredClone(options);

    const selectedOption = CopiedOptions?.find(
      (el) => el.item === item
    ) as OptionType;

    selectedOption.color = selectedOption.color.filter((el) => el !== color);

    for (const [index, option] of CopiedOptions.entries()) {
      if (option.item === item) CopiedOptions[index] = selectedOption;
    }

    setOptions(CopiedOptions);
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
            <S.AddInput detail={true} />
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
          <S.Body_Right className='stock'>
            {stocks.map((item, idx) => (
              <S.Stocks key={item}>
                <S.Select_Stock>
                  <S.Stocks_Info>SIZE</S.Stocks_Info>
                  <S.Styled_Select
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
                    classNamePrefix={'Select'}
                    placeholder={'선택하세요!!'}
                    options={options}
                    isSearchable={false}
                    onChange={(select: unknown) =>
                      handleOptionChange(select as IOptionProps, item)
                    }
                    isOptionDisabled={(option: unknown) =>
                      (option as IOptionProps).isdisabled
                    }
                  />
                  <S.Stocks_Info>COLOR</S.Stocks_Info>
                  <S.Color_PickBox>
                    <S.Color_PickButton
                      onClick={handleButtonClick({ item })}
                    ></S.Color_PickButton>
                    {options
                      .find((el) => el.item === item)
                      ?.color.map((c) => (
                        <S.Colors
                          key={uuidv4()}
                          onClick={() => removeColor(item, c)}
                          color={c}
                        ></S.Colors>
                      ))}
                    {/* {colorList.map((list) => {
                      if (list.item === item)
                        return (
                          <S.Colors
                            onClick={() => removeColor(list)}
                            isFirst={true}
                            key={uuidv4()}
                            color={list.color}
                          ></S.Colors>
                        );
                    })} */}

                    {pickerState.isOpen && pickerState.item === item && (
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
                                item,
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
                </S.Select_Stock>
                <S.Close onClick={removeItemStock} id={item}></S.Close>
              </S.Stocks>
            ))}
            {stocks.length < 3 && (
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
