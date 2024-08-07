import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  /* padding-bottom: 47%; */
  border: 2px solid blue;

  &:hover {
    .swiper-prev,
    .swiper-next {
      opacity: 0.6;
    }
  }
`;

export const Contents = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: 3px solid green;
`;

export const ItemImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Styled_Arrow = styled(FontAwesomeIcon)`
  cursor: pointer;
  position: absolute;
  z-index: 9999;
  font-size: 4rem;
  left: ${(props) =>
    props.direction === 'next'
      ? '10px'
      : 'calc(100% - 74px)'}; // fontawesome icon 너비크기와 + 왼쪽 간격 10px
  opacity: 0.3;
`;
