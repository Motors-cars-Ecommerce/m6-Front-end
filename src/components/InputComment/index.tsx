import { FormStyled, ContainerStyled } from "./styles";
import { OwnerComment } from "./styles";

const InputComment = () => {
  return (
    <ContainerStyled>
      <OwnerComment>
        <div>SL</div>
        <strong>Samuel Leão</strong>
      </OwnerComment>
      <FormStyled>
        <div>
          <input placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />

          <button type="submit">Comentar</button>
        </div>
      </FormStyled>
    </ContainerStyled>
  );
};

export default InputComment;
