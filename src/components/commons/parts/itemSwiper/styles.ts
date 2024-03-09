import styled from '@emotion/styled';
import { ArrowProps } from '@/commons/types/arrowtype';

// interface ArrowProps {
//   direction: string;
// }

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  &:hover {
    .swiper-prev,
    .swiper-next {
      opacity: 0.6;
    }
  }
`;

export const ItemImg = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

export const Arrow = styled.div<ArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  position: absolute;
  width: 50px;
  height: 100px;
  top: 22%;
  z-index: 99;
  opacity: 0;
  left: ${(props) => (props.direction === 'next' ? 0 : 'calc(100% - 50px)')};
  background-color: lightgray;
`;

export const Arrow_Direction = styled.img<ArrowProps>`
  width: 50px;
  height: 50px;
  opacity: 0.5;
  transform: ${(props) => (props.direction === 'prev' ? 'scaleX(-1)' : 'none')};
`;
