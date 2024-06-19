import Modal from "../../Modal/Modal.jsx";
import useModal from "../../../hooks/useModal.js";

const SideBarReviews = () => {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  return (
    <div>
      <button onClick={() => openModal(<div>리뷰탭</div>)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
};

export default SideBarReviews;
