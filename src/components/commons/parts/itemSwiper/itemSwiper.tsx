import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { css } from '@emotion/react';

export default function ItemSwiper() {
  const [swiper, setSwiper] = useState<SwiperCore>();

  return (
    <S.Wrapper>
      <S.Arrow
        onClick={() => swiper?.slidePrev()}
        className='swiper-prev'
        direction='next'
      >
        <S.Arrow_Direction src='/arrow.png' direction='next' />
      </S.Arrow>
      <Swiper
        modules={[Navigation]}
        className='item_swiper'
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
        speed={1500}
        spaceBetween={5}
        slidesPerView={4}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {new Array(12).fill(1).map((_, idx) => (
          <S.Styled_SwiperSlide key={idx}>
            <S.ItemImg src='/carousel3.jpeg' />
          </S.Styled_SwiperSlide>
        ))}
      </Swiper>
      <S.Arrow
        onClick={() => swiper?.slideNext()}
        className='swiper-next'
        direction='prev'
      >
        <S.Arrow_Direction src='/arrow.png' direction='prev' />
      </S.Arrow>
    </S.Wrapper>
  );
}
