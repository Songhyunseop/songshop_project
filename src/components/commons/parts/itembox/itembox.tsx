import { ItemBoxProps } from '@/commons/types/itemBox_type';
import * as S from './styles';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FavorToggleActiveState, UserState } from '@/commons/libraries/atom';
import { useToggleFavor } from '../../hooks/mutation/useMutationToggleFavor';
import { Flip, toast } from 'react-toastify';
import { useRef } from 'react';

export default function ItemBox(props: ItemBoxProps) {
  const userInfo = useRecoilValue(UserState);
  const [isActive, setIsActive] = useRecoilState(FavorToggleActiveState);

  const { product, ...rest } = props;

  // console.log(product, 'prprpr');

  const { mutateAsync: toggleFavor } = useToggleFavor();

  const productColors = product?.stock
    ? JSON.parse(product?.stock).map((data) => data.selectColor)[0]
    : [];

  const toggleLikeIt = (e) => {
    // 변경사항 업데이트
    if (isActive) return;
    setIsActive(true);

    if (!userInfo) {
      alert('로그인이 필요합니다');
      return;
    }

    toggleFavor({ product: product.id, user: userInfo.id });

    // 토스트 알림
    const message =
      e.currentTarget.id === 'false'
        ? '♥︎ 관심상품 목록에 등록되었습니다.'
        : '♡ 관심상품 목록에서 삭제되었습니다.';

    toast(message, {
      position: 'bottom-center',
      toastId: e.currentTarget.id,
      transition: Flip,
      autoClose: 1000,
      containerId: 'default',
      onClose: () => {
        setIsActive(false);
      },
    });
  };

  const onErrorImg = (e) => {
    // console.log(e);
    // e.target.src = '/12e.';
  };

  return (
    <S.ItemBox {...rest} id={product?.id}>
      {/* {props.isBest && <S.Label>BEST</S.Label>} */}
      <S.Item_Contents>
        <S.Image_Section>
          <S.Item_Img
            src={
              JSON.parse(product?.product_img)[0]
              // ? JSON.parse(product?.product_img)[0]
              // : '/vercel.svg'
            }
            onError={onErrorImg}
          />
        </S.Image_Section>
        <S.ItemInfo>
          <S.Info_Left>
            <S.Info_Left_Top>
              <S.Category>
                <S.Par color={'#6e6e6e'} weight={400} size={0.9}>
                  [{product?.product_category}]
                </S.Par>
                <S.Par color={'#6e6e6e'} weight={400} size={0.9}>
                  [{product?.product_subcategory}]
                </S.Par>
              </S.Category>
            </S.Info_Left_Top>
            <S.Summary_Setcion color={'#6e6e6e'}>
              <S.Bracket>{'['}</S.Bracket>
              <S.Summary>{product?.product_summary}</S.Summary>
              <S.Bracket>{']'}</S.Bracket>
            </S.Summary_Setcion>
            <S.Item_Name>{product?.product_name}</S.Item_Name>
            <S.Info_Left_Bottom>
              <S.PricePar line>{String(product?.product_price)}</S.PricePar>
              <S.PricePar size={1.1} weight={400}>
                38,900
              </S.PricePar>
              <S.PricePar size={1.1} weight={400} color={'red'}>
                8%
              </S.PricePar>
            </S.Info_Left_Bottom>
          </S.Info_Left>
          <S.Info_Right>
            <S.Colors_Wrapper>
              {productColors.map((color, idx) => (
                <S.Color color={color} key={idx}></S.Color>
              ))}
            </S.Colors_Wrapper>
            <S.CountsInfo>
              <S.Liked
                id={String(product?.isLiked)}
                onClick={toggleLikeIt}
                isLiked={product?.isLiked}
              >
                {product?.isLiked ? (
                  <S.CountIcon icon={solidHeart as IconProp}></S.CountIcon>
                ) : (
                  <S.CountIcon icon={faHeart}></S.CountIcon>
                )}
                {/* <div>{el?.likes.length}</div> */}
              </S.Liked>
              <S.Review>
                <S.CountIcon icon={faMessage}></S.CountIcon>
              </S.Review>
            </S.CountsInfo>
          </S.Info_Right>
        </S.ItemInfo>
      </S.Item_Contents>
    </S.ItemBox>
  );
}
