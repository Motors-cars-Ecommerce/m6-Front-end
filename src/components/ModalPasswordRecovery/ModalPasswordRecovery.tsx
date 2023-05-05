import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditAddressStyed } from "./styles";
import {z} from 'zod'
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import axios from "axios";
import setModalPasswordRecoverySchema from "../../Schemas/RecoverPassowrdSchema/RecoverPassowrdSchema";

const ModalPasswordRecovery = () => {

  const { setModalPasswordRecovery } = useContext(DashboardContext)
  
  type setModalPasswordRecoveryData = z.infer<typeof setModalPasswordRecoverySchema>

  const { register, handleSubmit, formState: {errors} } = useForm<setModalPasswordRecoveryData>( {resolver: zodResolver(setModalPasswordRecoverySchema)} )

  const onSubmitFunction = async (data:any) => {

    console.log(data)

    // try {
    //   await api.patch(`/address/`, keysWithValues);
    //   setModalEditAddress(false);
    //   toast.success('Informações atualizadas com Sucesso!')
    // } catch (error) {
    //   axios.isAxiosError(error) && console.log(error.response);
    //   toast.error("A requisição de edição falhou!");
    // }
  }

  return (
    <ModalEditAddressStyed>
      <div className="overlay">
        <div className="content">
          <section>
            <h2>Criar Nova Senha</h2>
            <button onClick={()=> setModalPasswordRecovery(false)} className="closeButton">X</button>
          </section>
          <h3>Digite o endereço de email cadastrado em nosso site</h3>
          <form onSubmit={handleSubmit(onSubmitFunction)} action="">
            <label htmlFor="">E-mail</label>
            <input type="text" placeholder="Digite seu email" {...register('email')} />
            {errors.email && <span> {errors.email.message} </span>}
            <div className="buttonsContainer">
              <button className="saveButton">Enviar email</button>
            </div>
          </form>
        </div>
      </div>
    </ModalEditAddressStyed>
  );
};

export default ModalPasswordRecovery;
