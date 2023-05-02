import { FormStyled, DivStreetStyled, DivButtonType } from "./styles";
import { SubmitHandler, useForm  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cadastreUserSchema } from "../../Schemas/User";
import { useContext, useState } from "react";
import { ICadastre } from "../../interfaces/User";
import { DataUserContext } from "../../context/userContext";










const ModalCadastre = () => {
  const [valueButton, setValueButton]= useState(false)









  const {
    register,
    handleSubmit,
    formState: { errors },} = useForm<ICadastre>({
    resolver: zodResolver(cadastreUserSchema),
  });

  const onSubmitFunc = (data: ICadastre) => {

    console.log("Valor do state =>>", valueButton)
    const {confirmPassword,...res}= data

    const newUser = {...res,  seller:valueButton}

    console.log(newUser)

    createdUser(newUser)
    
  };


  const {createdUser, mudarCorDobotaoAnunciante, mudarCorBotaoComprador, mudarCorAnunciante,mudarCorComprador} = useContext(DataUserContext)

  const registerValueButton =(value:boolean)=>{
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
      <input type="text" placeholder="00000.000" {...register("addresses.cep")} />

      {/* campo de estado e cidade separados por uma div */}
      <DivStreetStyled>
        <div>
          <label>Estado</label>
          <input
            type="text"
            placeholder="Digitar Estado"
            {...register("addresses.state")}
          />
        </div>
        <div>
          <label>Cidade</label>
          <input
            type="text"
            placeholder="Digitar cidade"
            {...register("addresses.city")}
          />
        </div>
      </DivStreetStyled>
      {/* ----------------------------- */}

      <label>Rua</label>
      <input type="text" placeholder="nome da Rua" {...register("addresses.street")} />

      <DivStreetStyled>
        <div>
          <label htmlFor="">Número</label>
          <input
            type="text"
            placeholder="Digitar número"
            {...register("addresses.number")}
          />
        </div>
        <div>
          <label htmlFor="">Complemento</label>
          <input
            type="text"
            placeholder="Ex: apart 307"
            {...register("addresses.complement")}
          />
        </div>
      </DivStreetStyled>

      <strong>Tipo da conta</strong>

      <DivButtonType>
        <button  className={mudarCorComprador} onClick={()=>(mudarCorBotaoComprador(), registerValueButton(false))} type="button" >
          Comprador
        </button>
        <button className={mudarCorAnunciante}  onClick={()=>(mudarCorDobotaoAnunciante(), registerValueButton(true))} type="button" >
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
