import * as S from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/zoom';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import InfoComponent from '@/components/commons/parts/details/product_top_info/info/info';
import InfoCheckComponents from '@/components/commons/parts/details/product_top_info/check/check';
import RenderComponents from '@/components/commons/parts/details/product_bottom_info/info';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons/faShoppingBag';
import SelectNav from '@/components/commons/layout/navigation/selctnav/selectnav';

import SwiperCore from 'swiper';

export default function Detail() {
  const router = useRouter();
  console.log(router);

  const [mainSwiper, setMainSwiper] = useState<SwiperCore>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [clickState, setClickState] = useState('상세정보');
  const [currentIndex, setCurrentIndex] = useState(0);

  const zoomSliderRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    zoomSliderRef.current?.forEach((ref) => {
      if (ref && mainSwiper) {
        ref.addEventListener('mouseover', function () {
          mainSwiper.zoom?.in();
        });

        ref.addEventListener('mouseout', function () {
          if (mainSwiper) mainSwiper.zoom?.out();
        });
      }
    });
  }, [mainSwiper]);

  console.log('렌더링 체크');

  return (
    <>
      <S.Main>
        <S.DetailWrapper_Top>
          <S.Product_Pic_Carousel>
            <S.Main_Pic_Section>
              <Swiper
                className='detail_swiper'
                modules={[Navigation, Zoom, Thumbs]}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                spaceBetween={1}
                slidesPerView={1}
                zoom={{ minRatio: 1, maxRatio: 2 }}
                allowTouchMove={false}
                onSwiper={setMainSwiper}
                onActiveIndexChange={(swiperCore) => {
                  setCurrentIndex(swiperCore.activeIndex);
                }}
              >
                {new Array(3).fill(1).map((el, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className='swiper-zoom-container'
                      ref={(el) => (zoomSliderRef.current[idx] = el)}
                    >
                      <S.Swiper_Img
                        src={`/carousel${idx + 1}.jpeg`}
                        alt='main_carousel'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.Main_Pic_Section>
            <S.Thumbs_Section>
              <Swiper
                className='detail_thumbs_swiper'
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
              >
                {new Array(3).fill(1).map((el, idx) => (
                  <SwiperSlide key={idx}>
                    <S.Swiper_Img
                      isThumbs={true}
                      isSameSlide={idx === currentIndex}
                      src={`/carousel${idx + 1}.jpeg`}
                      alt='main_carousel'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </S.Thumbs_Section>
          </S.Product_Pic_Carousel>
          <S.Details>
            <S.Product_Name>상품이름</S.Product_Name>
            <InfoComponent />
            <InfoCheckComponents />
            <S.Check_Total>
              <S.Index>TOTAL</S.Index>
              <S.Info_Contents>40,000원</S.Info_Contents>
            </S.Check_Total>
            <S.BtnWrapper>
              <S.Button_Buy>BUY NOW</S.Button_Buy>
              <S.Button_Bascket>
                <FontAwesomeIcon
                  style={{ fontSize: '2.5rem', color: '#F7F3F5' }}
                  icon={faShoppingBag}
                />
              </S.Button_Bascket>
            </S.BtnWrapper>
          </S.Details>
        </S.DetailWrapper_Top>
      </S.Main>
      <S.DetailWrapper_Bottom>
        <SelectNav clickState={clickState} setClickState={setClickState} />
        <RenderComponents clickState={clickState} />
      </S.DetailWrapper_Bottom>
      {/* </S.Main> */}
    </>
  );
}
