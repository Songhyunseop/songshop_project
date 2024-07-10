import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Upload_Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 3px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbsImg_Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
`;

export const Upload_Stock_Container = styled.div`
  &:not(:nth-of-type(1)) {
    margin-left: 0.3rem;
  }
`;

export const PreviewImg = styled.div`
  position: absolute;
  z-index: 999;
  cursor: pointer;
  width: 100px;
  height: 100px;
  padding: 0.9rem;
  border: 2px solid rgba(226, 194, 179, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(5%);
    visibility: visible;
  }
`;

export const uploadStock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.8rem;
  padding: 3.2px;
  color: black;
  border-radius: 7px;
  background-color: lightgray;

  &:hover + ${PreviewImg} {
    opacity: 1;
    visibility: visible;
    transform: translateY(5%);
  }
`;

export const StyledFontawesomeCloseIcon = styled(FontAwesomeIcon)`
  margin-left: 3px;
`;

export const addImg = styled.label`
  cursor: pointer;
  width: 100px;
  height: 90%;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #403024;
`;
