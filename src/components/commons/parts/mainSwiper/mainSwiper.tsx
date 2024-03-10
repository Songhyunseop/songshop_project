import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

export default function MainSWiper() {
  const [itemswiper, setItemSwiper] = useState<SwiperCore>();

  // swiper에 할당될 이미지 및 타이틀
  const imgList = [
    { name: 'carousel1', title: 'SEASON OFF DISCOUNT' },
    { name: 'carousel2', title: 'SUMMER SALE ITEMS' },
    { name: 'carousel3', title: 'SPRING SEASON ITEM' },
    { name: 'carousel4', title: 'NEW OUTERWEAR' },
  ];

  return (
    <S.Wrapper>
      <S.Arrow
        onClick={() => itemswiper?.slidePrev()}
        className='swipers-prev'
        direction='next'
      >
        <S.Arrow_Direction src='/arrow.png' direction='next' />
      </S.Arrow>

      <Swiper
        className='main_swiper'
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swipers-next',
          prevEl: '.swipers-prev',
        }}
        speed={1500}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={3}
        onSwiper={(swiper) => setItemSwiper(swiper)}
      >
        {imgList.map((el, idx) => (
          <SwiperSlide key={idx}>
            <S.Main_Carousel_Img src={`/${el.name}.jpeg`} alt='main_carousel' />
            <S.Main_Title>{el.title}</S.Main_Title>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.Arrow
        onClick={() => itemswiper?.slideNext()}
        className='swipers-next'
        direction='prev'
      >
        <S.Arrow_Direction src='/arrow.png' direction='prev' />
      </S.Arrow>
    </S.Wrapper>
  );
}
