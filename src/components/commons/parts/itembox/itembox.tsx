import { ItemBoxProps } from '@/commons/types/itemBox_type';
import * as S from './styles';
import { faHeart, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useRecoilValue } from 'recoil';
import { UserState } from '@/commons/libraries/atom';
import { useToggleFavor } from '../../hooks/mutation/useMutationToggleFavor';
import { throttle } from '@/commons/utils/throttle';

export default function ItemBox(props: ItemBoxProps) {
  const { el, ...rest } = props;
  const userInfo = useRecoilValue(UserState);

  const { mutateAsync: toggleFavor } = useToggleFavor();
  const throttleToggleFavor = throttle(toggleFavor, 200);

  const productColors = el?.stock
    ? JSON.parse(el?.stock).map((data) => data.selectColor)[0]
    : [];

  const toggleLikeIt = () => {
    if (userInfo) {
      const toggles = { product: el.id, user: userInfo.id };

      throttleToggleFavor(toggles);
    }
  };

  return (
    <S.ItemBox {...rest}>
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
              <S.Liked onClick={toggleLikeIt} isLiked={el?.isLiked}>
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
