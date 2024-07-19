import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

export default function MainSWiper() {
  const [mainswiper, setMainSwiper] = useState<SwiperCore>();

  // swiper에 할당될 이미지 및 타이틀
  const imgList = [
    { name: 'carousel1', title: 'TRENDSETTERS CHOICE ' },
    { name: 'carousel2', title: 'PURE & SIMPLE STYLES' },
    { name: 'carousel3', title: 'NATURAL & ELGANCE' },
    { name: 'carousel4', title: 'YOUNG & BEAUTY STYLES' },
  ];

  return (
    <S.Wrapper>
      <S.Styled_Arrow
        onClick={() => mainswiper?.slidePrev()}
        className='swipers-prev'
        direction='next'
        icon={faAngleDoubleLeft}
        fontSize={100}
        color={'white'}
      />
      <Swiper
        className='main_swiper'
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swipers-next',
          prevEl: '.swipers-prev',
        }}
        speed={500}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={3}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        onSwiper={(swiper) => setMainSwiper(swiper)}
      >
        {imgList.map((el, idx) => (
          <SwiperSlide key={idx}>
            <S.Main_Carousel_Img src={`/${el.name}.jpeg`} alt='main_carousel' />
            <S.Main_Carousel_Title>{el.title}</S.Main_Carousel_Title>
          </SwiperSlide>
        ))}
      </Swiper>
      <S.Styled_Arrow
        onClick={() => mainswiper?.slideNext()}
        className='swipers-next'
        direction='prev'
        icon={faAngleDoubleRight}
        fontSize={100}
        color={'white'}
      />
    </S.Wrapper>
  );
}
