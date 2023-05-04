import { useContext } from "react";
import { FormStyled, ContainerStyled } from "./styles";
import { OwnerComment } from "./styles";
import { DataUserContext } from "../../context/userContext";
import { ProductContext } from "../../context/ProductContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentContext } from "../../context/CommentContext";
import { icar } from "../../interfaces/Car";
import { IUser } from "../../interfaces/User";

export interface icomment {
  id?: string;
  text: string;
  car: string;
  user: string;
}

export interface icommentRequest {
  id: string;
  text: string;
  car: icar;
  user: IUser;
}

const commentSchema = z.object({
  text: z.string().nonempty(),
  car: z.any(),
  user: z.any(),
});

const InputComment = () => {
  const { user } = useContext(DataUserContext);
  const { product } = useContext(ProductContext);
  const { createComment } = useContext(CommentContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<icomment>({
    resolver: zodResolver(commentSchema),
  });

  const submit = (data: icomment) => {
    if (user && product) {
      const newComment: icomment = {
        ...data,
        user: user?.id,
        car: product?.id,
      };
      createComment(newComment);
      reset();
    }
  };

  return (
    <ContainerStyled>
      <OwnerComment>
        <div>{user?.name}</div>
        <strong>{user?.name}</strong>
      </OwnerComment>
      <FormStyled onSubmit={handleSubmit(submit)}>
        <div>
          <input
            placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
            {...register("text")}
          />
          <button type="submit">Comentar</button>
        </div>
      </FormStyled>
    </ContainerStyled>
  );
};

export default InputComment;
