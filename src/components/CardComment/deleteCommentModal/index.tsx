import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CommentContext } from "../../../context/CommentContext";
import { DeleteDivModal } from "./styled";
import {
  AceptModalButton,
  ButtonGeneric,
  CancelButton,
  CancelModalButton,
} from "../../../styles/componets/buttons/buttons";

const customStylesComments = {
  content: {
    width: "-webkit-fill-available",
    height: "fit-content",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

const customStylesCommentDesktop = {
  content: {
    width: "350px",
    height: "height: fit-content;",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

export const DeleteCommentModal = () => {
  const [modalStyles, setModalStyles] = useState(
    window.innerWidth < 800 ? customStylesComments : customStylesCommentDesktop
  );
  const { setDeleteCommentModal, deleteCommentModal, deleteComment } =
    useContext(CommentContext);

  useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800
          ? customStylesComments
          : customStylesCommentDesktop
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setDeleteCommentModal(!deleteCommentModal);
  };

  const confirmDelete = () => {
    deleteComment();
    toggleModal();
  };

  return (
    <Modal
      isOpen={deleteCommentModal}
      onRequestClose={toggleModal}
      style={modalStyles}
      contentLabel="Example Modal"
    >
      <DeleteDivModal>
        Deseja apagar este comentario?
        <div>
          <CancelModalButton onClick={() => toggleModal()}>
            Cancelar
          </CancelModalButton>
          <AceptModalButton onClick={() => confirmDelete()}>
            Deletar
          </AceptModalButton>
        </div>
      </DeleteDivModal>
    </Modal>
  );
};
