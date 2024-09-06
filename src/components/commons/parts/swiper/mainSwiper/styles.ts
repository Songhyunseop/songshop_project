import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Styled_Arrow = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 9999;
  left: ${(props) =>
    props.direction === 'next'
      ? 0
      : 'calc(100% - 100px)'}; // fontawesome icon 너비크기와 동일
  opacity: 0.6;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    ${Styled_Arrow} {
      opacity: 1;
    }
  }
`;

export const Main_Carousel_Title = styled.p`
  position: absolute;
  bottom: 10px;
  padding-left: 10px;
  color: #f7f3f5;
  font-size: 4.1vw;
  font-weight: 500;
  z-index: 999;
  transition: all 0.3s ease-out;
`;

export const Main_Carousel_Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: all 0.3s ease-out;

  :hover {
    + ${Main_Carousel_Title} {
      scale: 1.1;
    }
    scale: 1.1;
    filter: brightness(1);
  }
`;
