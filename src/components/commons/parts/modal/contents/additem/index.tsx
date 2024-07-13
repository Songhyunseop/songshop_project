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
import { useRecoilState } from 'recoil';
import { optionDataState, stocksState } from '@/commons/libraries/atom';
import { useCategorySelect } from '@/components/commons/hooks/custom/useCategorySelect/categorySelecthook';

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
  const [options, setOptions] = useRecoilState(optionDataState);

  const editorRef = useRef<editorType>();
  const subCategoryRef =
    useRef<Select<unknown, boolean, GroupBase<unknown>>>(null);

  const addItemStock = () => {
    const newStockId = uuidv4();
    const [copyStocks] = deepCopy([defaultStockData]);

    copyStocks.item = newStockId;
    setStocks((prev) => [...prev, copyStocks]);
  };

  const isRemainingSpace = () => {
    const [copyStocks] = deepCopy([stocks]);

    if (copyStocks.length >= 3) return false;
    return true;
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

  const { renderCategorySelect } = useCategorySelect(subCategoryRef);

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
            {renderCategorySelect(false)}
          </ItemInfo>
          <ItemInfo title={'상세 카테고리'} isCustom>
            {renderCategorySelect(true)}
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
