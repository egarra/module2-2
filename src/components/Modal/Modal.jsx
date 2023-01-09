import { useEffect } from 'react';
import { Modal, ImageComp } from './Modal.styled';
import { Backdrop } from 'components/Backdrop/Backdrop.styled';
import { Clock } from 'components/Clock/Clock';


export const ModalWindow = ({ largeImgUrl, onImageClick }) => {
  useEffect(() => {
    const keyEvent = (e) => {
      if (e.code === 'Escape') {
        onImageClick('');
      }
    }
    window.addEventListener('keydown', keyEvent);
    return ()=> window.removeEventListener('keydown', keyEvent);
  }, [onImageClick]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <Modal>
        <ImageComp src={largeImgUrl} alt="image" />
        <button type="button" onClick={() => onImageClick('')}>
          Close
        </button>
        <Clock />
      </Modal>
    </Backdrop>
  );
};
