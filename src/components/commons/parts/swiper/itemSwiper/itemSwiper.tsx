import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function ItemSwiper() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <S.Wrapper>
      {/* <S.Contents> */}
      <S.Styled_Arrow
        onClick={() => swiper?.slidePrev()}
        className='swipers-prev'
        direction='prev'
        icon={faCircleChevronRight}
        fontSize={100}
        color={'white'}
      ></S.Styled_Arrow>
      <Swiper
        modules={[Navigation]}
        className='item_swiper'
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        initialSlide={5}
        speed={500}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {new Array(12).fill(1).map((_, idx) => (
          <SwiperSlide key={idx}>
            <S.ItemImg src='/carousel3.jpeg' />
          </SwiperSlide>
        ))}
      </Swiper>
      <S.Styled_Arrow
        onClick={() => swiper?.slideNext()}
        className='swipers-next'
        direction='next'
        icon={faCircleChevronLeft}
        fontSize={100}
        color={'white'}
      ></S.Styled_Arrow>
      {/* </S.Contents> */}
    </S.Wrapper>
  );
}
