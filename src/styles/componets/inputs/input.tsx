import styled from "styled-components";

export const InputBoxComponent = styled.input`
  box-sizing: border-box;

  height: 2.5rem;
  width: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;

  border: 1.5px solid var(--grey-7);
  border-radius: 4px;

  &:focus {
    border-color: var(--brand-2);
    outline: none;
  }
`;

export const SelectBoxComponent = styled.select`
  box-sizing: border-box;

  height: 2.5rem;
  width: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  gap: 10px;

  border: 1.5px solid var(--grey-7);
  border-radius: 4px;

  &:focus {
    border-color: var(--brand-2);
    outline: none;
  }
`;
