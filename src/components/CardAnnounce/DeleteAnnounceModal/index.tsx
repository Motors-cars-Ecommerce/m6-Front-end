import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CommentContext } from "../../../context/CommentContext";
import {
  AceptModalButton,
  CancelModalButton,
} from "../../../styles/componets/buttons/buttons";
import { SallerContext } from "../../../context/salleContext";
import { StyledTitle } from "../../../styles/componets/typography";
import { DivDeleteModal, DivDeleteOptionsModal } from "./styles";

const customStylesDelete = {
  content: {
    width: "-webkit-fill-available",
    height: "fit-content",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "8px",
    maxWidth: "330px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

const customStylesDeleteDesktop = {
  content: {
    width: "330px",
    height: "fit-content;",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "8px",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

export const DeleteAdModal = () => {
  const [modalStyles, setModalStyles] = useState(
    window.innerWidth < 800 ? customStylesDelete : customStylesDeleteDesktop
  );
  const { deleteAdModal, setDeleteAdModal, deleteCar } =
    useContext(SallerContext);

  useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800 ? customStylesDelete : customStylesDeleteDesktop
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setDeleteAdModal(!deleteAdModal);
  };

  const confirmDelete = () => {
    deleteCar();
    toggleModal();
  };

  return (
    <Modal
      isOpen={deleteAdModal}
      onRequestClose={toggleModal}
      style={modalStyles}
      contentLabel="Example Modal"
    >
      <DivDeleteModal>
        <StyledTitle
          tag="h6"
          weight={500}
          size={16}
          height={20}
          color="--grey-1"
        >
          Excluir anúncio
        </StyledTitle>
        <StyledTitle tag="h6" weight={500} size={16} height={20}>
          Tem certeza que deseja remover este anúncio?
        </StyledTitle>
        <StyledTitle
          tag="span"
          color="--grey-2"
          weight={400}
          size={16}
          height={28}
        >
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </StyledTitle>
        <DivDeleteOptionsModal>
          <CancelModalButton onClick={() => toggleModal()}>
            Cancelar
          </CancelModalButton>
          <AceptModalButton onClick={() => confirmDelete()}>
            Deletar
          </AceptModalButton>
        </DivDeleteOptionsModal>
      </DivDeleteModal>
    </Modal>
  );
};
