import React from 'react'
import { ModalEditProfileStyed } from "./styles";
import { z } from 'zod';
import EditProfileSchema from '../../Schemas/EditProfileSchema/EditProfileSchema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const ModalEditProfile = () => {

  type EdteProfileFormData = z.infer<typeof EditProfileSchema>

  const { register, handleSubmit, formState: {errors}  } = useForm<EdteProfileFormData>({resolver: zodResolver(EditProfileSchema)})

  const onSubmitFunction = (data:any) => console.log(data)
  

  return (
    <ModalEditProfileStyed>
      <div className='overlay'>
        <div className='content'>
        <section>
        <h2>Editar perfil</h2>
        <button className='closeButton'>X</button>
        </section>
        <h3>Informações pessoais</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)}  action="">
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
            <textarea placeholder='Digite sua descrição' {...register('description')} name="" id="" cols={30} rows={10}></textarea>
            {errors.description && <span> {errors.description.message} </span>}
            <div className='buttonsContainer' >
                <button>Cancelar</button>
                <button className='deleteButton'>Excluir Perfil</button>
                <button type='submit' className='saveButton' >Salvar Alterações</button>
            </div>
        </form>
        </div>
      </div>
    </ModalEditProfileStyed>
  )
}

export default ModalEditProfile