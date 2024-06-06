import { useState } from 'react';
import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';

export default function AddItemModalContents() {
  interface IOptionProps {
    value: string;
    label: string;
    isdisabled: boolean;
  }

  const optionObj = [
    { value: 'S', label: 'small', item: '', isdisabled: false },
    { value: 'M', label: 'medium', item: '', isdisabled: false },
    { value: 'L', label: 'Large', item: '', isdisabled: false },
  ];

  const [options, setOptions] = useState(optionObj);
  const [stocks, setStocks] = useState<string[]>([]);

  const handleOptionChange = (select: IOptionProps, item: string) => {
    const selectedLabel = options.find(
      (opt) => opt.value === select?.value
    )?.label;

    const newSelectOptions = options.map((el) => {
      if (el.label !== selectedLabel && el.item === item)
        return { ...el, item: '', isdisabled: false };

      if (el.label === selectedLabel) return { ...el, isdisabled: true, item };
      return el;
    });

    setOptions(newSelectOptions);
  };

  const addItemStock = () => {
    if (stocks.length >= 3) {
      alert('3개 이상 선택할 수 없습니다');
      return;
    }

    const newStockId = uuidv4();

    const stocksList = [...stocks];
    stocksList.push(newStockId);
    setStocks(stocksList);

    console.log(options);
  };

  const removeItemStock = (e) => {
    const selectedStockId = e.target.id;

    // 배열 내 현재 아이템 제거
    const stocksList = [...stocks];
    const remainStockList = stocksList.filter((id) => id !== selectedStockId);

    // 현재 아이템과 일치하는 옵션 선택 및 초기화
    const newOptions = [...options];
    const selectedOne = newOptions.find((opt) => opt.item === selectedStockId);

    const selectIndex = newOptions.findIndex(
      (opt) => opt.item === selectedStockId
    );

    if (selectIndex !== -1 && selectedOne !== undefined) {
      selectedOne.item = '';
      selectedOne.isdisabled = false;

      newOptions[selectIndex] = selectedOne;
    }

    setStocks(remainStockList);
    setOptions(newOptions);
  };

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
                <S.CloseBox>
                  <S.Close onClick={removeItemStock} id={item}></S.Close>
                </S.CloseBox>
              </S.Stocks>
            ))}
            <S.AddItem onClick={addItemStock}>재고추가</S.AddItem>
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
