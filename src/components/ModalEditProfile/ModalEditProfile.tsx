import React from 'react'
import { ModalEditProfileStyed } from "./styles";

const ModalEditProfile = () => {
  return (
    <ModalEditProfileStyed>
      <div className='overlay'>
        <div className='content'>
        <section>
        <h2>Editar perfil</h2>
        <button className='closeButton'>X</button>
        </section>
        <h3>Informações pessoais</h3>
        <form action="">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder='Digite seu nome' />
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Digite seu email' />
            <label htmlFor="">CPF</label>
            <input type="text" placeholder='Digite seu CPF' />
            <label htmlFor="">Celular</label>
            <input type="text" placeholder='Digite seu celular' />
            <label htmlFor="">Descrição</label>
            <textarea placeholder='Digite sua descrição' name="" id="" cols={30} rows={10}></textarea>
            <div className='buttonsContainer' >
                <button>Cancelar</button>
                <button className='deleteButton'>Excluir Perfil</button>
                <button className='saveButton' >Salvar Alterações</button>
            </div>
        </form>
        </div>
      </div>
    </ModalEditProfileStyed>
  )
}

export default ModalEditProfile