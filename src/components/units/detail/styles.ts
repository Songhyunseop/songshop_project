import { isThumbsImageProps } from '@/commons/types/detail_type';
import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 2.5rem;
`;

export const DetailWrapper_Top = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: flex-start;
  padding-bottom: 4rem;
  gap: 5%;
`;

export const Product_Pic_Carousel = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Main_Pic_Section = styled.section`
  height: 75%;
`;

export const Swiper_Img = styled.img<isThumbsImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: ${(props) =>
    props.isSameSlide && props.isThumbs ? '4px solid #e2c2b3' : 'none'};
`;

export const Thumbs_Section = styled.section`
  height: 25%;
  display: flex;
  align-items: center;
`;

export const Details = styled.section`
  width: 55%;
  height: 100%;
  background-color: rgba(226, 194, 179, 0.12);
  border-radius: 5px;
  padding: 1.9rem;
`;

export const Product_Name = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Check_Total = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  margin-bottom: 3rem;
  font-size: 4rem;
`;

export const Index = styled.div`
  width: 17%;
  min-width: 110px;
  font-weight: 300;
  margin-right: 10rem;
`;

export const Info_Contents = styled.span`
  display: inline-block;
  font-weight: 600;
  color: #403234;
`;

export const BtnWrapper = styled.section`
  display: flex;
  gap: 3rem;
  height: 50px;
`;

export const Button_Buy = styled.button`
  width: 80%;
  height: 100%;
  border: none;
  color: #f7f3f5;
  font-size: 2rem;
  font-weight: 600;
  background-color: #e2c2b3;
`;

export const Button_Bascket = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  border: none;
  background-color: #687477;
`;

export const DetailWrapper_Bottom = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1.5px solid #d2d2d2;
  position: relative;
  z-index: 1;
`;
