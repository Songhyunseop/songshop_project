import styled from '@emotion/styled';
import { useState } from 'react';
import ReactModal from 'react-modal';

export const useCustomModal = () => {
  const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 9999,
    },
  };

  const StyledModal = styled(ReactModal)`
    border: 1.5px solid #d2d2d2;
    -webkit-overflow-scrolling: touch;
    background-color: white;
    position: absolute;
    z-index: 9999;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    overflow: auto;
    /* border: 3px solid red */
  `;

  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const Modal = ({ children }) => {
    return (
      <StyledModal
        id='modal'
        style={style}
        ariaHideApp={false}
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleModal}
      >
        {children}
      </StyledModal>
    );
  };

  return { handleModal, Modal, isOpen, setIsOpen };
};
