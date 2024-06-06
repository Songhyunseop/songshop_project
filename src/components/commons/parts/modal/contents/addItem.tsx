import { useState } from 'react';
import * as S from './styles';

export default function AddItemModalContents() {
  interface IOptionProps {
    value: string;
    label: string;
    isdisabled: boolean;
  }

  const optionObj = [
    { value: 'S', label: 'small', isdisabled: false },
    { value: 'M', label: 'medium', isdisabled: false },
    { value: 'L', label: 'Large', isdisabled: false },
  ];

  const [options, setOptions] = useState(optionObj);

  const handleOptionChange = (select: IOptionProps) => {
    const selectedLabel = options.find(
      (opt) => opt.value === select?.value
    )?.label;

    const newSelectOptions = options.map((el) => {
      if (el.label === selectedLabel) return { ...el, isdisabled: true };
      return el;
    });

    setOptions(newSelectOptions);
  };

  console.log('renderingggg');

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
            <S.Stocks>
              <S.Stocks_Info>SIZE</S.Stocks_Info>
              <S.Styled_Select
                classNamePrefix={'Select'}
                placeholder={'선택하세요!!'}
                options={options}
                isSearchable={false}
                onChange={(select: unknown) =>
                  handleOptionChange(select as IOptionProps)
                }
                isOptionDisabled={(option: unknown) =>
                  (option as IOptionProps).isdisabled
                }
              />
              <S.Stocks_Info>COLOR</S.Stocks_Info>
              <S.CloseBox>
                <S.Close></S.Close>
              </S.CloseBox>
            </S.Stocks>
            <S.AddItem>재고추가</S.AddItem>
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
