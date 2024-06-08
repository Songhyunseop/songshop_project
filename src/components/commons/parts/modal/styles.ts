import styled from 'node_modules/@emotion/styled';
import ReactModal from 'react-modal';

export const StyledModal = styled(ReactModal)`
  border: 1.5px solid #d2d2d2;
  -webkit-overflow-scrolling: touch;
  background-color: white;
  position: absolute;
  z-index: 9999;
  height: 50vw;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: auto;
  border: 3px solid red;
`;
