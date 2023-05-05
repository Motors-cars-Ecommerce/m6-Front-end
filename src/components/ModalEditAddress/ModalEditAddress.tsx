import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ModalEditAddressStyed } from "./styles";
import EditAddressSchema from "../../Schemas/EditAddressSchema/EditAddressSchema";
import {z} from 'zod'
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import api from "../../service/api";
import { toast } from "react-toastify";
import axios from "axios";

const ModalEditAddress = () => {

  const { setModalEditAddress } = useContext(DashboardContext)
  
  type EditAddressFormData = z.infer<typeof EditAddressSchema>
  const token = localStorage.getItem("@accessToken");

  const { register, handleSubmit, formState: {errors} } = useForm<EditAddressFormData>( {resolver: zodResolver(EditAddressSchema)} )

  const onSubmitFunction = async (data:any) => {
    const keysWithValues = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    try {
      await api.patch(`/address/`, keysWithValues, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModalEditAddress(false);
      toast.success('Informações atualizadas com Sucesso!')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A requisição de edição falhou!");
    }
  }

  return (
    <ModalEditAddressStyed>
      <div className="overlay">
        <div className="content">
          <section>
            <h2>Editar endereço</h2>
            <button onClick={()=> setModalEditAddress(false)} className="closeButton">X</button>
          </section>
          <h3>Informações de endereço</h3>
          <form onSubmit={handleSubmit(onSubmitFunction)} action="">
            <label htmlFor="">CEP</label>
            <input type="text" placeholder="Digite seu CEP" {...register('cep')} />
            {errors.cep && <span> {errors.cep.message} </span>}
            <div className="containter2Inputs">
              <div>
                <label htmlFor="">Estado</label>
                <input type="text" placeholder="Digite seu estado" {...register('state')} />
                {errors.state && <span> {errors.state.message} </span>}
              </div>
              <div>
                <label htmlFor="">Cidade</label>
                <input type="text" placeholder="Digite sua cidade" {...register('city')} />
                {errors.city && <span> {errors.city.message} </span>}
              </div>
            </div>

            <label htmlFor="">Rua</label>
            <input type="text" placeholder="Digite sua rua" {...register('street')} />
            {errors.street && <span> {errors.street.message} </span>}
            <div className="containter2Inputs" >
              <div>
                <label htmlFor="">Número</label>
                <input type="text" placeholder="Digite seu número" {...register('number')} />
                {errors.number && <span> {errors.number.message} </span>}
              </div>
              <div>
                <label htmlFor="">Complemento</label>
                <input type="text" placeholder="Digite seu complemento" {...register('complement')} />
                {errors.complement && <span> {errors.complement.message} </span>}
              </div>
            </div>
            <div className="buttonsContainer">
              <button onClick={()=> setModalEditAddress(false)}>Cancelar</button>
              <button className="saveButton">Salvar Alterações</button>
            </div>
          </form>
        </div>
      </div>
    </ModalEditAddressStyed>
  );
};

export default ModalEditAddress;
