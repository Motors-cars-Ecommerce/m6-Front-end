import styled from "styled-components";

export const FormComponet = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  span {
    color: red;
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: 15px;
    height: 15px;
  }

  label {
    padding-top: 24px;
  }
`;
