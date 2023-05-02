import { FormStyled, DivStreetStyled, DivButtonType } from "./styles";
import { SubmitHandler, useForm  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastreUserSchema } from "../../Schemas/User";
import { useContext, useState } from "react";
import { ICadastre } from "../../interfaces/User";
import { DataUserContext } from "../../context/userContext";

const ModalCadastre = () => {
  // const { onSubmitFunc } = useContext(UserContext);
  const [valueButton, setValueButton]= useState("buyer")









  const {
    register,
    handleSubmit,
    formState: { errors },} = useForm<ICadastre>({
    resolver: zodResolver(cadastreUserSchema),
  });

  const onSubmitFunc = (data: any) => {
    createdUser({...data,  typeUser:valueButton})
  };


  const {createdUser, mudarCorDobotaoAnunciante, mudarCorBotaoComprador, mudarCorAnunciante,mudarCorComprador} = useContext(DataUserContext)

  const registerValueButton =(value:string)=>{
    setValueButton(value)
  }
  return (
    <FormStyled onSubmit={handleSubmit(onSubmitFunc)}>
      <h1>Cadastro</h1>
      <span>Informações pessoais</span>

      <label>Nome</label>
      <input type="text" placeholder="Ex: Samuel Leão" {...register("name")} />

      <label>Email</label>
      <input
        type="text"
        placeholder="Ex: samuel@kenzie.com.br"
        {...register("email")}
      />

      <label>CPF</label>
      <input type="text" placeholder="000.000.000-00" {...register("cpf")} />

      <label>Celular</label>
      <input type="text" placeholder="(DDD) 9000-0000" {...register("phone")} />

      <label>Data de nascimento</label>
      <input type="text" placeholder="00/00/00" {...register("birthday")} />

      <label>Descrição</label>
      <input
        type="text"
        placeholder="Digitar descrição"
        {...register("description")}
      />

      <span>informações de endereço</span>

      <label>CEP</label>
      <input type="text" placeholder="00000.000" {...register("cep")} />

      {/* campo de estado e cidade separados por uma div */}
      <DivStreetStyled>
        <div>
          <label>Estado</label>
          <input
            type="text"
            placeholder="Digitar Estado"
            {...register("state")}
          />
        </div>
        <div>
          <label>Cidade</label>
          <input
            type="text"
            placeholder="Digitar cidade"
            {...register("city")}
          />
        </div>
      </DivStreetStyled>
      {/* ----------------------------- */}

      <label>Rua</label>
      <input type="text" placeholder="nome da Rua" {...register("street")} />

      <DivStreetStyled>
        <div>
          <label htmlFor="">Número</label>
          <input
            type="text"
            placeholder="Digitar número"
            {...register("number")}
          />
        </div>
        <div>
          <label htmlFor="">Complemento</label>
          <input
            type="text"
            placeholder="Ex: apart 307"
            {...register("complement")}
          />
        </div>
      </DivStreetStyled>

      <strong>Tipo da conta</strong>

      <DivButtonType>
        <button  className={mudarCorComprador} onClick={()=>(mudarCorBotaoComprador(), registerValueButton("buyer"))} type="button" value="buyer"  {...register("typeUser")}>
          Comprador
        </button>
        <button className={mudarCorAnunciante}  onClick={()=>(mudarCorDobotaoAnunciante(), registerValueButton("advertiser"))} type="button" value="advertiser" {...register("typeUser")}   >
          Anuciante
        </button>
      </DivButtonType>

      <label htmlFor="">Senha</label>
      <input
        type="text"
        placeholder="Digitar senha"
        {...register("password")}
      />

      <label htmlFor="">Confirmar Senha</label>
      <input
        type="text"
        placeholder="Digitar senha"
        {...register("confirmPassword")}
      />

      <button type="submit">Finalizar cadastro</button>
    </FormStyled>
  );
};

export default ModalCadastre;
