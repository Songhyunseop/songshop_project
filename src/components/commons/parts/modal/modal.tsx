import ReactModal from 'react-modal';

import * as S from './styles';

export default function Modal(props) {
  const { isOpen, children, handleModal } = props;

  const style = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    //     content: {
    // ,

    //       border: '5px solid red',
    //       overflow: 'auto',
    //     },
  };

  return (
    <S.StyledModal
      style={style}
      ariaHideApp={false}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleModal}
    >
      {children}
    </S.StyledModal>
  );
}
