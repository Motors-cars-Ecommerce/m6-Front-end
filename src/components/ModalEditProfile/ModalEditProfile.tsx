import React, { useContext } from 'react'
import { ModalEditProfileStyed } from "./styles";
import { z } from 'zod';
import EditProfileSchema from '../../Schemas/EditProfileSchema/EditProfileSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DashboardContext } from '../../context/DashboardContext';
import api from '../../service/api';
import axios from 'axios';
import { toast } from 'react-toastify'
import { DataUserContext } from '../../context/userContext';
import { SallerContext } from '../../context/salleContext';
import { useNavigate } from 'react-router';
import { async } from 'q';


const ModalEditProfile = () => {

  type EdteProfileFormData = z.infer<typeof EditProfileSchema>
  const token = localStorage.getItem("@accessToken");

  const navigate = useNavigate()

  const { register, handleSubmit, formState: {errors}  } = useForm<EdteProfileFormData>({resolver: zodResolver(EditProfileSchema)})

  const { setModalEditProfile } = useContext(DashboardContext)

  const { setUser } = useContext(DataUserContext);
  const { setSaller } = useContext(SallerContext);

  const onSubmitFunction = async (data:any) => {
    const keysWithValues = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    try {
      await api.patch(`/user/`, keysWithValues, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModalEditProfile(false);
      toast.success('Informações atualizadas com Sucesso!')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A requisição de edição falhou!");
    }
  }


  const handleAccountDeletion = (event:any) => {
    event.preventDefault()
    try {
      api.delete('/user/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      localStorage.removeItem("@accessToken")
      localStorage.removeItem("@userID")
      setModalEditProfile(false)
      toast.success('Conta Excluída com sucesso!')
      setUser(null);
      setSaller(null);
      navigate("/");
    } catch (error) {
     axios.isAxiosError(error) && console.log(error.response)
     toast.error('A requisição de exclusão falhou!')      
    }
  }
  

  return (
    <ModalEditProfileStyed>
      <div className='overlay'>
        <div className='content'>
        <section>
        <h2>Editar perfil</h2>
        <button onClick={()=> setModalEditProfile(false)} className='closeButton'>X</button>
        </section>
        <h3>Informações pessoais</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)} action="">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder='Digite seu nome' {...register('name')} />
            {errors.name && <span> {errors.name.message} </span>}
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Digite seu email' {...register('email')} />
            {errors.email && <span> {errors.email.message} </span>}
            <label htmlFor="">CPF</label>
            <input type="text" placeholder='Digite seu CPF' {...register('cpf')} />
            {errors.cpf && <span> {errors.cpf.message} </span>}
            <label htmlFor="">Celular</label>
            <input type="text" placeholder='Digite seu celular' {...register('phone')} />
            {errors.phone && <span> {errors.phone.message} </span>}
            <label htmlFor="">Descrição</label>
            <textarea placeholder='Digite sua descrição' id="" cols={30} rows={10} {...register('description')}></textarea>
            {errors.description && <span> {errors.description.message} </span>}
            <div className='buttonsContainer' >
                <button onClick={()=> setModalEditProfile(false)} >Cancelar</button>
                <button onClick={() => handleAccountDeletion(event)} className='deleteButton'>Excluir Perfil</button>
                <button type='submit' className='saveButton' >Salvar Alterações</button>
            </div>
        </form>
        </div>
      </div>
    </ModalEditProfileStyed>
  )
}

export default ModalEditProfile