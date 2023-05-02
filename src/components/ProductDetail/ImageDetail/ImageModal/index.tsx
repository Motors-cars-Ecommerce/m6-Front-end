import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { ProductContext } from "../../../../context/ProductContext";
import { StyledDivImage } from "../styled";
import { StyledDivImageModal } from "./styled";

const customImageStyles = {
  content: {
    height: "fit-content",
    top: "10%",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};

const customImageStylesDesktop = {
  content: {
    width: "520px",
    height: "auto",
    top: "30%",
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

export const ImageModal = () => {
  const { imageModal, setImageModal, Image } = useContext(ProductContext);
  const [modalStyles, setModalStyles] = useState(
    window.innerWidth < 800 ? customImageStyles : customImageStylesDesktop
  );

  useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800 ? customImageStyles : customImageStylesDesktop
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleModal() {
    setImageModal(false);
  }
  return (
    <Modal
      isOpen={imageModal}
      style={modalStyles}
      onRequestClose={toggleModal}
      contentLabel="ImageModal"
    >
      <StyledDivImageModal>
        <img src={Image} alt="image" className="modal_image" />
      </StyledDivImageModal>
    </Modal>
  );
};
