import styled from "styled-components";

const ContainerStyled = styled.div`
  background-color: var(--grey-10);

  max-width: 752px;
  min-width: 375px;
  width: 47%;
  height: 249px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 36px 44px 36px 44px;
  border-radius: 4px;
`;

const FormStyled = styled.form`
  margin-top: 15px;
  background-color: var(--grey-10);
  /* background-color: red; */

  max-width: 672px;
  min-width: 128px;
  width: 89%;
  height: 128px;

  border-radius: 4px;
  border: 2px solid var(--grey-7);
  /* gap: 10px; */

  div {
    display: flex;
    justify-content: flex-start;

    gap: 10px;

    input {
      margin-top: 10px;
      margin-left: 15px;
      border: none;
      max-width: 500px;
      min-width: 150px;
      width: 74%;
      height: 70px;

      font-size: 16px;

      background-color: green;

      @media (max-width: 768px) {
        height: 100px;

        /* background-color: yellow; */
      }
    }

    button {
      width: 108px;
      height: 38px;

      border-radius: 4px;
      border: none;

      background-color: var(--brand-1);
      font-size: 14px;
      font-weight: 600;
      color: var(--whiteFixed);

      cursor: pointer;

      margin-top: 70px;

      @media (max-width: 768px) {
        margin-top: 30px;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;

      /* background-color: yellow; */
    }
  }

  /* @media (max-width: 768px) {
    height: 300px;
  } */
`;

const OwnerComment = styled.div`
  width: 130px;
  height: 35px;

  /* background-color: green; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 32px;
    height: 32px;

    background-color: var(--random-5);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--whiteFixed);
  }
  strong {
    font-size: 14px;
    font-weight: 500;
    color: var(--grey-1);
  }
`;

export { FormStyled, ContainerStyled, OwnerComment };
