import styled from '@emotion/styled';
import { ArrowProps } from '@/commons/types/arrow_type';
import { SwiperSlide } from 'swiper/react';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 130px;
  display: flex;
  border: 3px solid green;

  &:hover {
    .swiper-prev,
    .swiper-next {
      opacity: 0.6;
    }
  }
`;

export const ItemImg = styled.img`
  max-width: 300px;
  width: 100%;
  z-index: 1;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Arrow = styled.div<ArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  position: absolute;
  width: 50px;
  height: 100px;
  top: calc(50% - 50px);
  z-index: 9;
  opacity: 0;
  left: ${(props) => (props.direction === 'next' ? 0 : 'calc(100% - 50px)')};
  background-color: lightgray;
`;

export const Arrow_Direction = styled.img<ArrowProps>`
  width: 50px;
  height: 50px;
  opacity: 0.5;
  transform: ${(props) => (props.direction === 'prev' ? 'scaleX(-1)' : 'none')};
`;

export const Styled_SwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    padding-top: 100%;
  }
`;
