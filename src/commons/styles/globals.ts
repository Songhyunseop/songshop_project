import { css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'NanumSquareNeo';
    font-weight: 200;
    font-size: 16px;
  }

  // main 캐러셀
  .main_swiper {
    height: 500px;
  }

  .main_swiper .swiper-slide {
    position: relative;
    width: 300px;
    overflow: hidden;
    transition: all 0.9s ease;

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

  @font-face {
    font-family: 'NanumSquareNeo';
    src: url('../../../fonts/nanumsquareneo-variable.woff') format('woff');
  }
`;

export default globalStyle;
