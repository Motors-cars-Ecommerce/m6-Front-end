import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { SallerContext } from "../../context/salleContext";
import { DivSucessModal } from "./styles";
import { StyledTitle } from "../../styles/componets/typography";
import { IoIosClose } from "react-icons/io";

const customStyles = {
  content: {
    height: "230px",
    top: "10%",
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
    height: "230px",
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

export const SucessAdModal = () => {
  const { sucessModal, setSucessModal } = useContext(SallerContext);
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
    setSucessModal(false);
  }

  return (
    <Modal
      isOpen={sucessModal}
      style={modalStyles}
      onRequestClose={toggleModal}
      contentLabel="Example Modal"
    >
      <DivSucessModal>
        <div className="header_div">
          <StyledTitle
            tag="h6"
            color="--grey-1"
            weight={500}
            size={16}
            height={20}
          >
            Sucesso!
          </StyledTitle>
          <IoIosClose onClick={toggleModal} />
        </div>
        <div className="detail_modal">
          <StyledTitle
            tag="h6"
            weight={500}
            size={16}
            height={20}
            color="--grey-1"
          >
            Seu anúncio foi criado com sucesso!
          </StyledTitle>
          <StyledTitle
            tag="span"
            weight={400}
            size={16}
            height={28}
            color="--grey-2"
          >
            Agora você poderá ver seus negócios crescendo em grande escala
          </StyledTitle>
        </div>
      </DivSucessModal>
    </Modal>
  );
};
