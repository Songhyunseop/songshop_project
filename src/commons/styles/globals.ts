import { css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo';
    font-weight: 200;
    font-size: 62.5%;
  }

  // main 캐러셀
  .main_swiper {
    height: 500px;
  }

  .main_swiper .swiper-slide {
    position: relative;
    width: 300px;
    overflow: hidden;
    transition: all 0.8s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  // item 캐러셀
  .item_swiper {
    height: 350px;
    margin-bottom: 200px;
  }

  .item_swiper .swiper-slide {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
  }

  // detail 캐러셀
  .detail_swiper {
    width: 100%;
    height: 100%;
  }

  .detail_thumbs_swiper {
    width: 70%;
    height: 120px;
  }

  // swiper-zoom-container 기본 속성 수정
  .detail_swiper .swiper-zoom-container > img,
  .swiper-zoom-container > svg,
  .swiper-zoom-container > canvas {
    object-fit: cover;
  }
`;

export default globalStyle;
