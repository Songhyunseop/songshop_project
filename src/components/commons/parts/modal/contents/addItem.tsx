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

  const optionObj = [
    { value: 'S', label: 'small', item: '', color: [], isdisabled: false },
    { value: 'M', label: 'medium', item: '', color: [], isdisabled: false },
    { value: 'L', label: 'Large', item: '', color: [], isdisabled: false },
  ];

  const [options, setOptions] = useState(optionObj);
  const [stocks, setStocks] = useState<string[]>([]);

  const [color, setColor] = useColor('#561ecb');
  const [pickerState, setPickerState] = useState([]);

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

    if (selectIndex !== -1 && selectedOne !== undefined) {
      selectedOne.item = '';
      selectedOne.color = [];
      selectedOne.isdisabled = false;

      newOptions[selectIndex] = selectedOne;
    }

    setStocks(remainStockList);
    setOptions(newOptions);
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
          option.color.push(color.hex);
      }

      setOptions(CopiedOptions);
      setPickerState({ ...e, isOpen: !e.isOpen });

      return;
    }

    // ColorPicker 여는 버튼 클릭 시 로직

    const openColorPicker = () => {
      const isChecked = options.find((opt) => opt.item === e.item);

      console.log('Tlqkf');
      console.log(isChecked);

      if (!isChecked) {
        alert('사이즈를 먼저 체크해주세요');
        return;
      }

      setPickerState({ ...e, isOpen: !e.isOpen });
    };

    openColorPicker();
    // return openColorPicker;
  };

  const resetColor = () => {
    const hex = '#ffffff';
    const rgb = ColorService.toRgb(hex);
    const hsv = ColorService.toHsv(hex);
    setColor({ hex, rgb, hsv });
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
            {stocks.map((item) => (
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
                  <S.Colors>d</S.Colors>
                  <S.Color_PickBox>
                    <S.Color_PickButton
                      onClick={handleButtonClick({ item })}
                    ></S.Color_PickButton>
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
