import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditAddressStyed } from "./styles";
import {z} from 'zod'
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import axios from "axios";
import { ResetPasswordPageSchema } from "../../Schemas/RecoverPassowrdSchema/RecoverPassowrdSchema";
import { useNavigate, useParams } from "react-router-dom";


const ResetPasswordPage = () => {

    const { id } = useParams()
    const navigate = useNavigate()
  
  type ResetPasswordPageSchemaData = z.infer<typeof ResetPasswordPageSchema>

  const { register, handleSubmit, formState: {errors} } = useForm<ResetPasswordPageSchemaData>( {resolver: zodResolver(ResetPasswordPageSchema)} )

  const onSubmitFunction = async (data:any) => {

    delete data.password_confirmation

    console.log(data)

    try {
      await api.patch(`/user/resetPassword/${id}`, data);
      toast.success('Senha Alterada com Sucesso!')
      navigate('/login')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A requisição do servidor falhou!");
    }
  }

  return (
    <ModalEditAddressStyed>
      <div className="overlay">
        <div className="content">
          <section>
            <h2>Redefinir Senha</h2>
          </section>
          <h3>Digite sua nova senha nos campos</h3>
          <form onSubmit={handleSubmit(onSubmitFunction)} action="">
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register('password')} />
            {errors.password && <span> {errors.password.message} </span>}
            <label htmlFor="">Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua senha" {...register('confirmPassword')} />
            {errors.confirmPassword && <span> {errors.confirmPassword.message} </span>}
            <div className="buttonsContainer">
              <button className="saveButton">Alterar Senha</button>
            </div>
          </form>
        </div>
      </div>
    </ModalEditAddressStyed>
  );
};

export default ResetPasswordPage;
