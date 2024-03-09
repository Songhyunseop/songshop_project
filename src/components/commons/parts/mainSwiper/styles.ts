import styled from '@emotion/styled';
import { ArrowProps } from '@/commons/types/arrowtype';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    .swipers-prev,
    .swipers-next {
      opacity: 0.6;
    }
  }
`;

export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  width: 70px;
  height: 220px;
  z-index: 999;
  left: ${(props) => (props.direction === 'next' ? 0 : 'calc(100% - 70px)')};
  background-color: lightgray;
  opacity: 0;
`;

export const Arrow_Direction = styled.img<ArrowProps>`
  width: 50px;
  height: 50px;
  opacity: 1;
  transform: ${(props) => (props.direction === 'prev' ? 'scaleX(-1)' : 'none')};
`;

export const Main_Carousel_Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: all 0.7s ease-out;

  :hover {
    scale: 1.1;
  }
`;

export const Main_Title = styled.p`
  position: absolute;
  bottom: 10px;
  padding-left: 10px;
  color: #f7f3f5;
  font-size: 3rem;
  font-weight: 500;
  z-index: 2;
`;
