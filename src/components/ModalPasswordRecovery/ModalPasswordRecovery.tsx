import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditAddressStyed } from "./styles";
import {z} from 'zod'
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import axios from "axios";
import { ModalPasswordRecoverySchema } from "../../Schemas/RecoverPassowrdSchema/RecoverPassowrdSchema";

const ModalPasswordRecovery = () => {

  const { setModalPasswordRecovery } = useContext(DashboardContext)
  
  type ModalPasswordRecoveryData = z.infer<typeof ModalPasswordRecoverySchema>

  const { register, handleSubmit, formState: {errors} } = useForm<ModalPasswordRecoveryData>( {resolver: zodResolver(ModalPasswordRecoverySchema)} )

  const onSubmitFunction = async (data:any) => {

    try {
      await api.post(`/user/resetPassword/`, data);
      setModalPasswordRecovery(false);
      toast.success('E-mail enviado com sucesso!')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("E-mail inválido!");
    }
  }

  return (
    <ModalEditAddressStyed>
      <div className="overlay">
        <div className="content">
          <section>
            <h2>Esqueci Minha Senha</h2>
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
