import styled from "styled-components";
export const PageSelectStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 10px;
  }
  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: var(--grey-3);
  }
  h3 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: rgba(134, 142, 150, 0.5);
  }
  h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--brand-2);
  }
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 20px;
    .button-filter-dashboard {
      display: none;
    }
  }
`;
