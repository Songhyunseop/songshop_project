import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import {
  faAngleDoubleLeft,
  faCircleChevronLeft,
  faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function ItemSwiper() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <S.Wrapper>
      {/* <S.Arrow
        onClick={() => swiper?.slidePrev()}
        className='swiper-prev'
        direction='next'
      >
        <S.Arrow_Direction src='/arrow.png' direction='next' />
      </S.Arrow> */}
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
        speed={500}
        spaceBetween={10}
        slidesPerView={5}
        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
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
      {/* <S.Arrow
        onClick={() => swiper?.slideNext()}
        className='swiper-next'
        direction='prev'
      >
        <S.Arrow_Direction src='/arrow.png' direction='prev' />
      </S.Arrow> */}
    </S.Wrapper>
  );
}
