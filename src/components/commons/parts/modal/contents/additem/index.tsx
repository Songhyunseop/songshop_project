import * as S from './styles';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { Editor as editorType } from '@toast-ui/react-editor';
import 'react-color-palette/css';

import { useRef } from 'react';

import { deepCopy } from '@/commons/utils/deepcopy';
import Select from 'react-select/dist/declarations/src/Select';
import { GroupBase } from 'react-select';
import ItemInfo from './iteminfo';

import UploadImageComponent from './imageUpload';
import { useRecoilState, useRecoilValue } from 'recoil';
import { fileListState, stocksState } from '@/commons/libraries/atom';
import { useCategorySelect } from '@/components/commons/hooks/custom/useCategorySelect/categorySelecthook';
import { FormProvider, useForm } from 'react-hook-form';
import CustomSelect from '../../../select';
import { useMutationCreateProduct } from '@/components/commons/hooks/mutation/useMutationCreateProduct';
import {
  useGetPublicUrl,
  useUploadToStorage,
} from '@/components/commons/hooks/mutation/useMutationUploadImage';
import { yupResolver } from '@hookform/resolvers/yup';
import { uploadProductSchema } from '@/commons/libraries/validate/signInSchema';

// editor 컴포넌트 클라이언트 측에서 렌더링
const WriteEditor = dynamic(() => import('../../../editor/writeeditor'), {
  ssr: false,
});

export default function AddItemModalContents() {
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
    resolver: yupResolver(uploadProductSchema),
  });

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = methods;

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
    const rrr = editorRef.current.getInstance().getSelectedText();
    console.log(rrr);
  };

  const { mutateAsync: uploadImgFileToStorage } = useUploadToStorage();
  const { mutateAsync: getPublicUrl } = useGetPublicUrl();
  const { mutateAsync: createProduct } = useMutationCreateProduct();

  const submitBoard = async (formData) => {
    console.log(formData);

    if (editorRef.current) {
      const textData = editorRef.current.getInstance().getHTML();
      formData.description = textData;
    }

    const userInputData = {
      product_name: formData.itemName,
      product_category: formData.category,
      product_subcategory: formData.subCategory,
      product_price: formData.itemPrice,
      product_summary: formData.itemDetail,
      product_description: formData.description,
      product_img: await returnStorageUrl(formData.previewImages),
      stock: formData.stocks,
    };

    await createProduct(userInputData);
  };

  const returnStorageUrl = async (imgArr: File[]) => {
    const urlList = await uploadImgFiles(imgArr);

    return urlList.map((data) => data.url);
  };

  const uploadImgFiles = async (imgArr: File[]) => {
    const publicUrl = await Promise.all(
      imgArr.map(async (file: File) =>
        getPublicUrl(await uploadImgFileToStorage(file))
      )
    );

    return publicUrl;
  };

  return (
    <S.AddItem_Content_Wrapper>
      <S.Modal_Header>상품추가</S.Modal_Header>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitBoard)}>
          <S.Modal_Body>
            <ItemInfo
              register={register('itemName')}
              title={['상품명', 'itemName']}
              errorstate={errors}
            />
            <ItemInfo
              register={register('itemPrice')}
              title={['상품가격', 'itemPrice']}
              errorstate={errors}
            />
            <ItemInfo
              title={['상세내용', 'itemDetail']}
              isCustom
              errorstate={errors}
            >
              <S.DetailText
                {...register('itemDetail')}
                placeholder='상세내용을 입력하세요'
                maxLength={300}
              />
            </ItemInfo>
            <ItemInfo
              title={['IMAGE', 'previewImages']}
              isCustom
              errorstate={errors}
            >
              <UploadImageComponent
                register={() => register('previewImages')}
                setValue={setValue}
              />
            </ItemInfo>
            <ItemInfo
              title={['카테고리', 'category']}
              isCustom
              errorstate={errors}
            >
              <CustomSelect {...categoryProps} />
            </ItemInfo>
            <ItemInfo
              title={['상세 카테고리', 'subCategory']}
              isCustom
              errorstate={errors}
            >
              <CustomSelect {...subCategoryProps} />
            </ItemInfo>
            {/* <ItemInfo title='재고' isCustom>
              {stocks.map((stock) => (
                <StocksComponent key={stock.item} stock={stock} />
              ))}
              {isRemainingSpace() && (
                <S.AddItem type='button' onClick={addItemStock}>
                  재고추가
                </S.AddItem>
              )}
            </ItemInfo> */}
            {/* <ItemInfo title={'상품 디테일'} isCustom>
              <WriteEditor
                changeContent={changeContent}
                editorRef={editorRef}
              />
            </ItemInfo> */}
            <S.Add_Button>상품등록</S.Add_Button>
          </S.Modal_Body>
        </form>
      </FormProvider>
    </S.AddItem_Content_Wrapper>
  );
}
