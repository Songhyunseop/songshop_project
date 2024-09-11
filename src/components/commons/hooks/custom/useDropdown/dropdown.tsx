import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';

const getBackgroudColor = ({ isScrolled, isChangeStylePath }) => {
  if (isScrolled) return 'white';
  if (isChangeStylePath) return 'none';
  return 'white';
};

const getPropsResult = ({ isScrolled, isChangeStylePath }) => {
  if (isScrolled) return 'black';
  if (isChangeStylePath === false) return 'black';

  return 'white';
};

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }  
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }  
    100% {
        opacity: 0;
    }
`;

export const DropBox = styled.div`
  transition: all 0.3s ease;
  background-color: ${(props) => getBackgroudColor(props)};
  color: ${(props) => getPropsResult(props)};
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  width: 140%;
  transform: translate(-50%, 50px);
  border: 1px solid white;
  border-top: none;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${fadeIn} 0.3s ease;
        `
      : css`
          opacity: 0;
          animation: ${fadeOut} 0.3s ease;
        `}

  :hover {
    display: block;
  }
`;

export const DropItem = styled.div`
  transition: color 0.3s ease;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  &:hover {
    color: #e2c2b3;
    display: flex;
  }
`;

interface IDropDownProps {
  options: string[];
  onAnimationEnd: () => void;
  isHover: boolean | string;
  isVisible: boolean | string;
  isScrolled: boolean;
  isChangeStylePath: boolean;
}

export const UseDropDown = () => {
  const [isHover, setIsHover] = useState<boolean | string>(false);
  const [isVisible, setIsVisible] = useState<boolean | string>(false);

  const dropDownRef = useRef(null);

  const openDrop = (target) => {
    if (dropDownRef.current) {
      clearTimeout(dropDownRef.current);
    }

    setIsHover(target);
    setIsVisible(target);
  };

  const closeDrop = () => {
    dropDownRef.current = setTimeout(() => {
      setIsVisible(false);
      // console.log(222);
    }, 200);
  };

  const onAnimationEnd = () => {
    if (!isVisible) setIsHover(false);
  };

  function DropDown({ options, isHover, ...rest }: IDropDownProps) {
    return (
      <>
        {isHover && (
          <DropBox {...rest}>
            {options.map((name) => (
              <DropItem key={name}>{name}</DropItem>
            ))}
          </DropBox>
        )}
      </>
    );
  }

  return {
    openDrop,
    closeDrop,
    DropDown,
    isHover,
    isVisible,
    onAnimationEnd,
  };
};
