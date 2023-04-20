import React, { useContext } from "react";
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
  CreateAnnounceButton,
  DisableButton,
  EnableButton,
} from "../../styles/componets/buttons/buttons";
import { StyledTitle } from "../../styles/componets/typography";
import { FormComponet } from "../../styles/componets/Forms/form";
import { IoIosClose } from "react-icons/io";
import ReactModal from "react-modal";
import { SallerContext, icar } from "../../context/salleContext";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

const imageSchema = yup.object().shape({
  image_url: yup.string(),
});

const modelCarSchema = yup.object().shape({
  branded: yup.string(),
  model: yup.string(),
  year: yup.string(),
  fuel: yup.string(),
});

const formSchema = yup.object().shape({
  km: yup.number(),
  price: yup.number(),
  color: yup.string(),
  description: yup.string(),
  main_image: yup.string(),
  images: yup.array(imageSchema),
  model_car: modelCarSchema,
});

export const NewAdModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalStyles, setModalStyles] = React.useState(
    window.innerWidth < 800 ? customStyles : customStylesDesktop
  );
  const { saller, createNewCar } = useContext(SallerContext);

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<icar>({
    resolver: yupResolver(formSchema),
  });

  const submit = (data: any) => {
    //const id = localStorage.getItem("@USER_ID");
    const id = "f2b684cd-fc07-4bc6-8a73-80be024447c9";
    const newData = { ...data, user: saller, id: id };
    createNewCar(newData);
    toggleModal();
  };

  return (
    <StyledDivModal>
      <CreateAnnounceButton onClick={toggleModal}>
        Criar anuncio
      </CreateAnnounceButton>
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
        <FormComponet onSubmit={handleSubmit(submit)}>
          <label htmlFor="branded">Marca</label>
          <InputBoxComponent
            type="text"
            placeholder="Mercedes Benz"
            {...register("model_car.branded")}
          />
          <label htmlFor="model">Modelo</label>
          <InputBoxComponent
            type="text"
            placeholder="A 200 CGI ADVANCE SEDAN"
            {...register("model_car.model")}
          />
          <DivCarDetailModal>
            <div>
              <label htmlFor="">Ano</label>
              <InputBoxComponent
                type="text"
                placeholder="2018"
                {...register("model_car.year")}
              />
            </div>
            <div>
              <label htmlFor="fuel">Combustivel</label>
              <InputBoxComponent
                type="text"
                placeholder="Etanol/Gasolina"
                {...register("model_car.fuel")}
              />
            </div>
            <div>
              <label htmlFor="km">Quilometragem</label>
              <InputBoxComponent
                type="text"
                placeholder="30.000"
                {...register("km")}
              />
            </div>
            <div>
              <label htmlFor="color">Cor</label>
              <InputBoxComponent
                type="text"
                placeholder="Branco"
                {...register("color")}
              />
            </div>
            <div>
              <label htmlFor="">Preço tabela FIPE</label>
              <InputBoxComponent type="text" placeholder="R$ 48.000,00" />
            </div>
            <div>
              <label htmlFor="price">Preço</label>
              <InputBoxComponent
                type="text"
                placeholder="R$ 50.000,00"
                {...register("price")}
              />
            </div>
          </DivCarDetailModal>
          <label htmlFor="description">Descrição</label>
          <InputBoxComponent
            type="text"
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            {...register("description")}
          />
          <label htmlFor="main_image">Imagem da Capa</label>
          <InputBoxComponent
            type="text"
            placeholder="https://image.com"
            {...register("main_image")}
          />
          <label htmlFor="image_url">1ª Imagem da Galeria</label>
          <InputBoxComponent
            type="text"
            placeholder="https://image.com"
            //{...register("images")}
          />
          <AddImageButton>
            Adicionar campo para imagem da galeria
          </AddImageButton>
          <DivButtonModal>
            <CancelButton onClick={() => toggleModal()}> Cancelar</CancelButton>
            <DisableButton type="submit">Criar Anuncio</DisableButton>
          </DivButtonModal>
        </FormComponet>
      </Modal>
    </StyledDivModal>
  );
};
