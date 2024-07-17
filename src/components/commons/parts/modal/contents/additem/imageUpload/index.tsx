import Image from 'next/image';
import * as S from './styles';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { fileListState, imageUrlState } from '@/commons/libraries/atom';

export default function UploadImageComponent() {
  const [fileList, setFilesList] = useRecoilState(fileListState);
  const [uploadImgUrl, setUploadImgUrl] = useRecoilState(imageUrlState);

  const createPreviewImg = (fileArray: File[]) => {
    // 이미지 미리보기 로직
    fileArray.forEach((file) => {
      const blobUrl = URL.createObjectURL(file);

      setUploadImgUrl((prev) => [...prev, blobUrl]);
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
  return (
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
            <S.PreviewImg onClick={() => window.open(img_url, '_blank')}>
              <Image
                alt='미리보기'
                src={img_url}
                fill
                sizes='100%'
                unoptimized
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
  );
}
