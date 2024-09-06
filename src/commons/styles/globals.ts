import { css } from '@emotion/react';

const globalStyle = css`
  :root {
    --toastify-toast-width: none; // alert Toast 기본 너비값 제거
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo';
    font-weight: 300;
  }

  // main 캐러셀
  .main_swiper {
    position: relative;
    width: 100%;
  }

  .main_swiper .swiper-slide {
    padding-bottom: 50%;
    width: 33.333vw; // layout shift 방지용
  }

  .swiper-pagination {
    display: none;
  }

  // item 캐러셀 (상품정보)
  .item_swiper {
    position: relative;
    width: 100%;
  }

  .item_swiper .swiper-slide {
    padding-bottom: 35%;
    width: 33.333%; // 반응형에 따라 처리필요 (2개씩 보일 때는 50%로)
    min-height: 250px;
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
    /* font-size: 1rem; */
  }

  // 폰트
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
