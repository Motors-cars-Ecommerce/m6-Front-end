import { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CommentContext } from "../../../context/CommentContext";
import { EditDivModal } from "./styled";
import {
  AceptModalButton,
  ButtonGeneric,
  CancelButton,
  CancelModalButton,
} from "../../../styles/componets/buttons/buttons";
import { icommentUpdate } from "../../../interfaces/Comment";
import { StyledTitle } from "../../../styles/componets/typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormComponet } from "../../../styles/componets/Forms/form";
import { InputBoxComponent } from "../../../styles/componets/inputs/input";

const customEditStylesComments = {
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

const customEditStylesCommentDesktop = {
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

const formSchema = z.object({
  text: z.string(),
});

export const EditCommentModal = () => {
  const [modalStyles, setModalStyles] = useState(
    window.innerWidth < 800
      ? customEditStylesComments
      : customEditStylesCommentDesktop
  );
  const { setEditCommentModal, editCommentModal, pachComment } =
    useContext(CommentContext);

  useEffect(() => {
    const handleResize = () => {
      setModalStyles(
        window.innerWidth < 800
          ? customEditStylesComments
          : customEditStylesCommentDesktop
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<icommentUpdate>({
    resolver: zodResolver(formSchema),
  });

  const toggleModal = () => {
    setEditCommentModal(!editCommentModal);
    reset();
  };

  const submit = (data: icommentUpdate) => {
    pachComment(data);
    toggleModal();
  };

  return (
    <Modal
      isOpen={editCommentModal}
      onRequestClose={toggleModal}
      style={modalStyles}
      contentLabel="Example Modal"
    >
      <EditDivModal>
        <StyledTitle tag="h4">Edite seu comentario:</StyledTitle>
        <FormComponet id="form_create" onSubmit={handleSubmit(submit)}>
          <InputBoxComponent
            type="text"
            placeholder="Digite seu Texto aqui..."
            {...register("text")}
          />
          <div>
            <CancelModalButton type="button" onClick={() => toggleModal()}>
              Cancelar
            </CancelModalButton>
            <AceptModalButton type="submit">Editar</AceptModalButton>
          </div>
        </FormComponet>
      </EditDivModal>
    </Modal>
  );
};
