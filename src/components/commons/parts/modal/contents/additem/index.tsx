import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';
import 'react-color-palette/css';

import { useRef } from 'react';
import {
  useGetPublicUrl,
  useUploadToStorage,
} from '@/components/commons/hooks/query/useQueryGetAllProducts';
import { deepCopy } from '@/commons/utils/deepcopy';
import Select from 'react-select/dist/declarations/src/Select';
import { GroupBase } from 'react-select';
import ItemInfo from './iteminfo';

import UploadImageComponent from './imageUpload';
import StocksComponent from './stocks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fileListState, stocksState } from '@/commons/libraries/atom';
import { useCategorySelect } from '@/components/commons/hooks/custom/useCategorySelect/categorySelecthook';
import { FormProvider, useForm } from 'react-hook-form';
import CustomSelect from '../../../select';
import { useMutationCreateProduct } from '@/components/commons/hooks/mutation/useMutationCreateProduct';

// editor 컴포넌트 클라이언트 측에서 렌더링
const WriteEditor = dynamic(() => import('../../../editor/writeeditor'), {
  ssr: false,
});

export default function AddItemModalContents() {
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
  const fileList = useRecoilValue(fileListState);

  const editorRef = useRef<editorType>();
  const subCategoryRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const methods = useForm({
    defaultValues: {
      itemName: '',
      itemPrice: '',
      itemDetail: '',
      previewImages: [],
      category: '',
      subCategory: '',
      stocks: [],
      description: '',
    },
  });

  const { handleSubmit, register } = methods;

  const { getCategorySelectProps } = useCategorySelect(subCategoryRef);
  const { categoryProps, subCategoryProps } = getCategorySelectProps();

  // Functions
  const addItemStock = () => {
    const newStockId = uuidv4();
    const [copyStock] = deepCopy([defaultStockData]);

    copyStock.item = newStockId;
    copyStock.index = stocks.length;

    // 사이즈, 카운트 수 옵션기본값을 stock에 담아둠
    setStocks((prev) => [...prev, copyStock]);
  };

  const isRemainingSpace = () => {
    const [copyStocks] = deepCopy([stocks]);

    if (copyStocks.length >= 3) return false;
    return true;
  };

  // editor 입력값 핸들링
  const changeContent = (e) => {
    // const kkk = editorRef.current.getInstance().getSelection();
    // console.log(kkk);
  };

  const { mutateAsync: uploadFiles } = useUploadToStorage();
  const { mutateAsync: getPublicUrl } = useGetPublicUrl();
  const { mutateAsync: createProduct } = useMutationCreateProduct();

  const submitBoard = async (formData) => {
    console.log(formData);

    if (editorRef.current) {
      const textData = editorRef.current.getInstance().getHTML();
      formData.description = textData;
    }

    const uploadedList = await Promise.all(
      fileList.map(async (file) => getPublicUrl(await uploadFiles(file)))
    );
    formData.previewImages = uploadedList.map((data) => data.url);

    const userInputData = {
      product_name: formData.itemName,
      product_category: formData.category,
      product_subcategory: formData.subCategory,
      product_price: formData.itemPrice,
      product_summary: formData.itemDetail,
      product_description: formData.description,
      product_img: formData.previewImages,
      stock: formData.stocks,
    };

    const rr = await createProduct(userInputData);
    console.log(123, rr);
  };

  return (
    <>
      <S.Modal_Header>상품추가</S.Modal_Header>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitBoard)}>
          <S.Modal_Body>
            <ItemInfo register={register('itemName')} title='상품명' />
            <ItemInfo register={register('itemPrice')} title='상품가격' />
            <ItemInfo title='상세내용' isCustom>
              <S.DetailText
                {...register('itemDetail')}
                placeholder='상세내용을 입력하세요'
                maxLength={300}
              />
            </ItemInfo>
            <ItemInfo title='IMAGE' isCustom>
              <UploadImageComponent />
            </ItemInfo>
            <ItemInfo title='카테고리' isCustom>
              <CustomSelect {...categoryProps} />
            </ItemInfo>
            <ItemInfo title='상세 카테고리' isCustom>
              <CustomSelect {...subCategoryProps} />
            </ItemInfo>
            <ItemInfo title='재고' isCustom>
              {stocks.map((stock) => (
                <StocksComponent key={stock.item} stock={stock} />
              ))}
              {isRemainingSpace() && (
                <S.AddItem type='button' onClick={addItemStock}>
                  재고추가
                </S.AddItem>
              )}
            </ItemInfo>
            <ItemInfo title={'상품 디테일'} isCustom>
              <WriteEditor
                changeContent={changeContent}
                editorRef={editorRef}
              />
            </ItemInfo>
            <S.Add_Button>상품등록</S.Add_Button>
          </S.Modal_Body>
        </form>
      </FormProvider>
    </>
  );
}
