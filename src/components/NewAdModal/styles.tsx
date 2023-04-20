import styled from "styled-components";

export const StyledDivModal = styled.section``;

export const StyledModal = {
  content: {},
};

export const DivHeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 24px;
    cursor: pointer;
  }
`;

export const DivCarDetailModal = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    padding-top: 24px;
    width: 152px;
    height: 73px;

    input,
    select {
      width: 100%;
    }

    @media (min-width: 800px) {
      height: 73px;
      width: 50%;
    }
  }
`;

export const DivButtonModal = styled.div`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;

  button {
    cursor: pointer;
  }

  @media (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
  }
`;
