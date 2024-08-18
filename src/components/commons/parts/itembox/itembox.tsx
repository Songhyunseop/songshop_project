import { ItemBoxProps } from '@/commons/types/itemBox_type';
import * as S from './styles';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/commons/libraries/atom';
import { useToggleFavor } from '../../hooks/mutation/useMutationToggleFavor';
import { throttle } from '@/commons/utils/throttle';
import { Flip, toast } from 'react-toastify';

export default function ItemBox(props: ItemBoxProps) {
  const userInfo = useRecoilValue(UserState);

  const { el, ...rest } = props;

  const { mutateAsync: toggleFavor } = useToggleFavor();

  const productColors = el?.stock
    ? JSON.parse(el?.stock).map((data) => data.selectColor)[0]
    : [];

  const toggleLikeIt = (target) => {
    // 변경사항 업데이트
    if (userInfo) throttleToggleFavor({ product: el.id, user: userInfo.id });

    // 토스트 알림
    const message =
      target.id === 'false'
        ? '♥︎ 관심상품 목록에 등록되었습니다.'
        : '♡ 관심상품 목록에서 삭제되었습니다.';

    toast(message, {
      position: 'bottom-center',
      toastId: target.id,
      transition: Flip,
      autoClose: 1500,
      containerId: 'default',
    });
  };

  const throttleToggleFavor = throttle(toggleFavor, 200);

  const triggerToggle = (e) => {
    const currentTarget = e.currentTarget;
    trigger(currentTarget);
  };

  const trigger = throttle((currentTarget) => toggleLikeIt(currentTarget), 800);

  return (
    <S.ItemBox {...rest} id={el?.id}>
      {/* {props.isBest && <S.Label>BEST</S.Label>} */}
      <S.Item_Contents>
        <S.Image_Section>
          <S.Item_Img
            src={el?.product_img ? JSON.parse(el?.product_img)[0] : 'fallback'}
          />
        </S.Image_Section>
        <S.ItemInfo>
          <S.Info_Left>
            <S.Info_Left_Top>
              <S.Category>
                <S.Par color={'#bdbdb3'} weight={400} size={0.9}>
                  [{el?.product_category}]
                </S.Par>
                <S.Par color={'#bdbdb3'} weight={400} size={0.9}>
                  [{el?.product_subcategory}]
                </S.Par>
              </S.Category>
            </S.Info_Left_Top>
            <S.Summary_Setcion>
              <S.Bracket>{'['}</S.Bracket>
              <S.Summary>{el?.product_summary}</S.Summary>
              <S.Bracket>{']'}</S.Bracket>
            </S.Summary_Setcion>
            <S.Item_Name>{el?.product_name}</S.Item_Name>
            <S.Info_Left_Bottom>
              <S.PricePar line>{String(el?.product_price)}</S.PricePar>
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
                id={String(el?.isLiked)}
                onClick={triggerToggle}
                isLiked={el?.isLiked}
              >
                {el?.isLiked ? (
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
