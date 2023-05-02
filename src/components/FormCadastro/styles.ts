import styled from "styled-components";

const FormStyled = styled.form`
  max-width: 411px;
  min-width: 320px;
  width: 20%;

  height: auto;

  display: flex;
  flex-direction: column;

  border: 1.5px solid var(--grey-4);
  border-radius: 4px;

  background-color: var(--grey-10);
  padding: 3%;

  label {
    margin-top: 24px;
    margin-bottom: 8px;

    color: var(--grey-1);
    font-weight: 500;
    font-size: 14px;
  }

  input {
    width: 73%;
    height: 48px;

    border: 1.5px solid var(--grey-7);
    border-radius: 4px;
    font-size: 16px;
  }

  input::placeholder {
    padding-left: 10px;
  }

  strong {
    margin-top: 28px;
    margin-bottom: 28px;
  }

  button {
    width: 43%;
    height: 48px;

    border-radius: 4px;
    border: none;

    color: var(--whiteFixed);
    font-weight: 600;

    background-color: var(--brand-1);

    margin-top: 28px;
    margin-bottom: 44px;
  }

  
`;

const DivStreetStyled = styled.div`
  width: 73%;
  height: auto;

  display: flex;
  justify-content: space-between;

  margin-top: 24px;

  div {
    /* background-color: red; */
    width: 45%;

    input {
      width: 100%;

      margin-top: 8px;
    }
  }
`;

const DivButtonType = styled.div`
  width: 90%;
  height: auto;

  display: flex;
  justify-content: space-around;

  .normal{
    color: black;
    border-color: black;
    border: 1px solid black;
    background-color: transparent;
    cursor: pointer;
  }

  .roxo{
    color:white ;
    border-color: black;
    border: 1px solid black;
    background-color: var(--brand-1);
    cursor: pointer;
  }



`;

export { FormStyled, DivStreetStyled, DivButtonType };
