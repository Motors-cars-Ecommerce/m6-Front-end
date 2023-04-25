import { useEffect, useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    insetInlineStart: "5px",
    width: "85vw",
    insetBlockStart: "20vw",
    borderRadius: "8px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
  },
};
const customStylesDesktop = {
  content: {
    width: "520px",
    height: "80vh",
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
export const TestModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalStyles, setModalStyles] = useState(
    window.innerWidth < 800 ? customStyles : customStylesDesktop
  );
  useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800 ? customStyles : customStylesDesktop
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={modalStyles}
      contentLabel="Example Modal"
    ></Modal>
  );
};
