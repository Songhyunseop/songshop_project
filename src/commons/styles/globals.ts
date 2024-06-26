import { css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo';
    font-weight: 300;
  }

  // main 캐러셀
  .main_swiper {
    width: 100%;
    height: 500px;
    border: 5px solid red;
  }

  .main_swiper .swiper-slide {
    border: 2px solid blue;
    position: relative;
    overflow: hidden;
    transition: filter 0.8s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }

  // item 캐러셀
  .item_swiper {
    width: 100%;
  }

  .item_swiper .swiper-slide {
    max-width: 320px;
    max-height: 320px;
    display: flex;
    justify-content: center;
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

  // 모달 창 바깥 컨텐츠 영역 스크롤 방지
  .ReactModal__Body--open {
    overflow: hidden;
  }

  // editor 코드

  .toastui-editor-contents {
    font-size: 1rem;
  }
  // 색깔 입힌 글꼴 굵게 적용
  p strong span {
    font-weight: inherit;
  }

  p strong em {
    font-weight: inherit;
  }

  p strong del {
    font-weight: inherit;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 200;
    src: url('/public/fonts/NanumSquareNeo-aLt.ttf') format('ttf');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 300;
    src: url('/public/fonts/NanumSquareNeo-bRg.ttf') format('ttf');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 400;
    src: url('/public/fonts/NanumSquareNeo-cBd.ttf') format('ttf');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 500;
    src: url('/public/fonts/NanumSquareNeo-dEb.ttf') format('ttf');
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    font-style: normal;
    font-weight: 700;
    src: url('/public/fonts/NanumSquareNeo-eHv.ttf') format('ttf');
  }
`;

export default globalStyle;
