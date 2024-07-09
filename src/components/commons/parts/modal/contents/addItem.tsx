import * as S from './styles';

import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';

import { ColorService, Hue, Saturation, useColor } from 'react-color-palette';
import 'react-color-palette/css';

import { useRef, useState } from 'react';
import {
  faCheck,
  faCircleXmark,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  useGetPublicUrl,
  useUploadToStorage,
} from '@/components/commons/hooks/query/useQueryGetAllProducts';
import Image from 'next/image';
import supabaseLoader from 'pages/api/faviconLoader';
import { deepCopy } from '@/commons/utils/deepcopy';

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

  // 요청 용 데이터
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
    { label: '1개', value: 1, isdisabled: false },
    { label: '2개', value: 2, isdisabled: false },
    { label: '3개', value: 3, isdisabled: false },
    { label: '4개', value: 4, isdisabled: false },
    { label: '5개', value: 5, isdisabled: false },
    { label: '6개', value: 6, isdisabled: false },
    { label: '7개', value: 7, isdisabled: false },
    { label: '8개', value: 8, isdisabled: false },
    { label: '9개', value: 9, isdisabled: false },
    { label: '10개', value: 10, isdisabled: false },
  ];

  const CategoryOptions = [
    {
      label: 'OUTWEAR',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        {
          main: 'OUTWEAR',
          label: 'COAT',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'OUTWEAR',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'OUTWEAR',
          label: 'HOOD',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'OUTWEAR',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
    {
      label: 'TOP',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        { main: 'TOP', label: 'COAT', name: 'subCategory', isdisabled: false },
        {
          main: 'TOP',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        { main: 'TOP', label: 'HOOD', name: 'subCategory', isdisabled: false },
        {
          main: 'TOP',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
    {
      label: 'BOTTOM',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        {
          main: 'BOTTOM',
          label: 'COAT',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'BOTTOM',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'BOTTOM',
          label: 'HOOD',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'BOTTOM',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
    {
      label: 'SHOES',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        {
          main: 'SHOES',
          label: 'COAT',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'SHOES',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'SHOES',
          label: 'HOOD',
          name: 'subCategory',
          isdisabled: false,
        },
        {
          main: 'SHOES',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
    {
      label: 'BAG',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        { main: 'BAG', label: 'COAT', name: 'subCategory', isdisabled: false },
        {
          main: 'BAG',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        { main: 'BAG', label: 'HOOD', name: 'subCategory', isdisabled: false },
        {
          main: 'BAG',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
    {
      label: 'ACC',
      isdisabled: false,
      name: 'mainCategory',
      subCategory: [
        { main: 'ACC', label: 'COAT', name: 'subCategory', isdisabled: false },
        {
          main: 'ACC',
          label: 'JACKET',
          name: 'subCategory',
          isdisabled: false,
        },
        { main: 'ACC', label: 'HOOD', name: 'subCategory', isdisabled: false },
        {
          main: 'ACC',
          label: 'CASUAL',
          name: 'subCategory',
          isdisabled: false,
        },
      ],
    },
  ];

  const OptionsData = { sizeOptions, countOptions, CategoryOptions };

  const [stockData, setStockData] = useState<IStockDataType>(selectedStocks);
  const [options, setOptions] = useState(OptionsData);

  const [color, setColor] = useColor('#561ecb');

  const [fileList, setFilesList] = useState<File[]>([]);
  const [uploadImgUrl, setUploadImgUrl] = useState<string[]>([]);

  const editorRef = useRef<editorType>();
  const subCategoryRef = useRef(null);

  interface ISelected {
    value: string;
    label: string;
    item: string;
    count: number;
    isdisabled: boolean;
    isPickerOpen: boolean;
  }
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

  const handleCountChange = (select, item: string) => {
    const [copiedStocks, copiedOptionGroup] = deepCopy([stockData, options]);
    const copiedSizes = [...copiedOptionGroup.sizeOptions];

    const selectOne = copiedSizes.find((el) => el.item === item);
    if (selectOne) copiedStocks[selectOne?.value].count = select.value;

    const newOptions = copiedSizes.map((option) => {
      if (option.item === selectOne?.item)
        return { ...option, count: select.value };
      return { ...option };
    });

    setStockData(copiedStocks);
    setOptions((prev) => {
      return { ...prev, sizeOptions: newOptions };
    });
  };

  ////
  const obj = {
    value: '',
    label: '',
    item: '',
    count: 1,
    selectColor: [],
    isdisabled: false,
    isPickerOpen: false,
  };

  const [stocks, setStocks] = useState([]);

  const addItemStock = () => {
    const newStockId = uuidv4();
    const [stockData] = deepCopy([obj]);

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
    const [copyStocks] = deepCopy([stocks, options]);

    const selected = copyStocks.find((stock) => stock.item === item);
    const targetIdx = copyStocks.findIndex((stock) => stock.item === item);

    const isDuplicate = selected.selectColor.some(
      (itemColor) => itemColor === color.hex
    );

    if (isDuplicate) {
      alert('이미 선택된 색상입니다');
      return;
    }

    console.log(copyStocks);

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
    const [copyStocks] = deepCopy([stocks, options]);

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

      setUploadImgUrl((prev) => [url, ...prev]);
      setFilesList((filesList) => [file, ...filesList]);
    } catch (e) {
      console.log(e);
    }
  };

  const createPreviewImg = (fileArray: File[]) => {
    // 이미지 미리보기 로직
    fileArray.forEach((file) => {
      const blobUrl = URL.createObjectURL(file);

      setUploadImgUrl((prev) => [blobUrl, ...prev]);
      setFilesList((fileList) => [file, ...fileList]);
    });
  };

  const handleFiles = (e) => {
    const files = e.target.files;
    const fileArray: File[] = Array.from(files);

    createPreviewImg(fileArray);
  };

  const removeImg = (imgIndex: number) => {
    const reduceListItem = () => {
      const newFileList = fileList.filter((_, idx) => idx !== imgIndex);
      const newUrlList = uploadImgUrl.filter((_, idx) => idx !== imgIndex);

      setFilesList(newFileList);
      setUploadImgUrl(newUrlList);
    };

    return reduceListItem;
  };

  const changeCategory = (e) => {
    if (e.name === 'mainCategory') {
      const newOptions = CategoryOptions.map((category) => {
        if (category.label === e.label)
          return { ...category, isdisabled: true };
        else return { ...category, isdisabled: false };
      });

      setOptions((prev) => {
        return { ...prev, CategoryOptions: newOptions };
      });
    }

    if (e.name === 'subCategory') {
      const newOptions = options.CategoryOptions.map((category) => {
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
              <S.Upload_Container>
                <S.ThumbsImg_Wrapper>
                  {uploadImgUrl.map((img_url, idx) => (
                    <S.Upload_Stock_Container key={img_url}>
                      <S.uploadStock>
                        {/* Text 중앙 맞추기 위한 스타일 */}
                        <span
                          style={{
                            marginTop: '1.6px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {fileList[idx]?.name}
                        </span>
                        <S.StyledFontawesomeCloseIcon
                          onClick={removeImg(idx)}
                          icon={faCircleXmark}
                        />
                      </S.uploadStock>
                      <S.PreviewImg
                        onClick={() => window.open(img_url, '_blank')}
                      >
                        <Image
                          alt='미리보기'
                          src={img_url}
                          fill
                          sizes='100%'
                          unoptimized
                          loader={supabaseLoader}
                        />
                      </S.PreviewImg>
                    </S.Upload_Stock_Container>
                  ))}
                </S.ThumbsImg_Wrapper>
                <S.addImg htmlFor='imgInput'>업로드</S.addImg>
                <input
                  accept='image/jpeg,image/png'
                  onChange={handleFiles}
                  id='imgInput'
                  type='file'
                  hidden
                />
              </S.Upload_Container>
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>카테고리</S.Body_Left>
            <S.Body_Right>
              <S.Category_Select
                classNamePrefix={'CategorySelect'}
                options={CategoryOptions}
                placeholder={'카테고리를 선택하세요'}
                isSearchable={false}
                onChange={changeCategory}
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
            </S.Body_Right>
          </S.Body_Container>
          <S.Body_Container>
            <S.Body_Left>상세 카테고리</S.Body_Left>
            <S.Body_Right>
              <S.SubCategory_Select
                ref={subCategoryRef}
                classNamePrefix={'SubCategorySelect'}
                options={returnSubCategoryOpts()}
                placeholder={'카테고리를 선택하세요'}
                isSearchable={false}
                onChange={changeCategory}
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
            </S.Body_Right>
          </S.Body_Container>
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
              ))}
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
