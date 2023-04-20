import { FormStyled, DivStreetStyled, DivButtonType } from "./styles";

const ModalCadastre = () => {
  return (
    <FormStyled>
      <h1>Cadastro</h1>
      <span>Informações pessoais</span>

      <label>Nome</label>
      <input type="text" placeholder="Ex: Samuel Leão" />

      <label>Email</label>
      <input type="text" placeholder="Ex: samuel@kenzie.com.br" />

      <label>CPF</label>
      <input type="text" placeholder="000.000.000-00" />

      <label>Celular</label>
      <input type="text" placeholder="(DDD) 9000-0000" />

      <label>Data de nascimento</label>
      <input type="text" placeholder="00/00/00" />

      <label>Descrição</label>
      <input type="text" placeholder="Digitar descrição" />

      <span>informações de endereço</span>

      <label>CEP</label>
      <input type="text" placeholder="00000.000" />

      {/* campo de estado e cidade separados por uma div */}
      <DivStreetStyled>
        <div>
          <label>Estado</label>
          <input type="text" placeholder="Digitar Estado" />
        </div>
        <div>
          <label>Cidade</label>
          <input type="text" placeholder="Digitar cidade" />
        </div>
      </DivStreetStyled>
      {/* ----------------------------- */}

      <label>Rua</label>
      <input type="text" placeholder="nome da Rua" />

      <DivStreetStyled>
        <div>
          <label htmlFor="">Número</label>
          <input type="text" placeholder="Digitar número" />
        </div>
        <div>
          <label htmlFor="">Complemento</label>
          <input type="text" placeholder="Ex: apart 307" />
        </div>
      </DivStreetStyled>

      <strong>Tipo da conta</strong>

      <DivButtonType>
        <button>Comprador</button>
        <button>Anuciante</button>
      </DivButtonType>

      <label htmlFor="">Senha</label>
      <input type="text" placeholder="Digitar senha" />

      <label htmlFor="">Confirmar Senha</label>
      <input type="text" placeholder="Digitar senha" />

      <button>Finalizar cadastro</button>
    </FormStyled>
  );
};

export default ModalCadastre;
