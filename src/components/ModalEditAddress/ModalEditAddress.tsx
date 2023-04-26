import React from "react";
import { ModalEditAddressStyed } from "./styles";

const ModalEditAddress = () => {
  return (
    <ModalEditAddressStyed>
      <div className="overlay">
        <div className="content">
          <section>
            <h2>Editar endereço</h2>
            <button className="closeButton">X</button>
          </section>
          <h3>Informações de endereço</h3>
          <form action="">
            <label htmlFor="">CEP</label>
            <input type="text" placeholder="Digite seu CEP" />
            <div className="containter2Inputs">
              <div>
                <label htmlFor="">Estado</label>
                <input type="text" placeholder="Digite seu estado" />
              </div>
              <div>
                <label htmlFor="">Cidade</label>
                <input type="text" placeholder="Digite sua cidade" />
              </div>
            </div>

            <label htmlFor="">Rua</label>
            <input type="text" placeholder="Digite sua rua" />
            <div className="containter2Inputs" >
              <div>
                <label htmlFor="">Número</label>
                <input type="text" placeholder="Digite seu número" />
              </div>
              <div>
                <label htmlFor="">Complemento</label>
                <input type="text" placeholder="Digite seu complemento" />
              </div>
            </div>
            <div className="buttonsContainer">
              <button>Cancelar</button>
              <button className="saveButton">Salvar Alterações</button>
            </div>
          </form>
        </div>
      </div>
    </ModalEditAddressStyed>
  );
};

export default ModalEditAddress;
