import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import {
  StyledDivModal,
  DivHeaderModal,
  DivCarDetailModal,
  DivButtonModal,
} from "./styles";
import { InputBoxComponent } from "../../styles/componets/inputs/input";
import {
  AddImageButton,
  CancelButton,
  DisableButton,
  EnableButton,
} from "../../styles/componets/buttons/buttons";
import { StyledTitle } from "../../styles/componets/typography";
import { FormComponet } from "../../styles/componets/Forms/form";
import { IoIosClose } from "react-icons/io";
import ReactModal from "react-modal";

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
    height: "auto",
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

export const NewAdModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalStyles, setModalStyles] = React.useState(
    window.innerWidth < 800 ? customStyles : customStylesDesktop
  );

  React.useEffect(() => {
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
    <StyledDivModal>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        style={modalStyles}
        contentLabel="Example Modal"
      >
        <DivHeaderModal>
          <StyledTitle
            tag="h5"
            color="--grey-1"
            weight={500}
            size={16}
            height={20}
          >
            Criar anúncio
          </StyledTitle>
          <IoIosClose onClick={toggleModal} />
        </DivHeaderModal>
        <StyledTitle
          tag="span"
          color="--grey-0"
          size={14}
          height={24}
          weight={500}
        >
          Informação do veiculo
        </StyledTitle>
        <FormComponet action="">
          <label htmlFor="">Marca</label>
          <InputBoxComponent type="text" placeholder="Mercedes Benz" />
          <label htmlFor="">Modelo</label>
          <InputBoxComponent
            type="text"
            placeholder="A 200 CGI ADVANCE SEDAN"
          />
          <DivCarDetailModal>
            <div>
              <label htmlFor="">Ano</label>
              <InputBoxComponent type="text" placeholder="2018" />
            </div>
            <div>
              <label htmlFor="">Combustivel</label>
              <InputBoxComponent type="text" placeholder="Etanol/Gasolina" />
            </div>
            <div>
              <label htmlFor="">Quilometragem</label>
              <InputBoxComponent type="text" placeholder="30.000" />
            </div>
            <div>
              <label htmlFor="">Cor</label>
              <InputBoxComponent type="text" placeholder="Branco" />
            </div>
            <div>
              <label htmlFor="">Preço tabela FIPE</label>
              <InputBoxComponent type="text" placeholder="R$ 48.000,00" />
            </div>
            <div>
              <label htmlFor="">Preço</label>
              <InputBoxComponent type="text" placeholder="R$ 50.000,00" />
            </div>
          </DivCarDetailModal>
          <label htmlFor="">Descrição</label>
          <InputBoxComponent
            type="text"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          />
          <label htmlFor="">Imagem da Capa</label>
          <InputBoxComponent type="text" placeholder="https://image.com" />
          <label htmlFor="">1ª Imagem da Galeria</label>
          <InputBoxComponent type="text" placeholder="https://image.com" />
          <AddImageButton>
            Adicionar campo para imagem da galeria
          </AddImageButton>
          <DivButtonModal>
            <CancelButton>Cancelar</CancelButton>
            <DisableButton type="submit">Criar Anuncio</DisableButton>
          </DivButtonModal>
        </FormComponet>
      </Modal>
    </StyledDivModal>
  );
};
