import { Modal, ImageComp } from './Modal.styled';
import { Backdrop } from 'components/Backdrop/Backdrop.styled';

export const ModalWindow = ({ largeImgUrl, onImageClick }) => {
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
      </Modal>
    </Backdrop>
  );
};
