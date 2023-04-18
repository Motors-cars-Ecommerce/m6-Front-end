import styled from "styled-components";

export const DashboardMainStyled = styled.main`
  .container-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    /* margin: 5px; */
  }

  ul {
    display: flex;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
    height: 100%;
    gap: 20px;
  }

  .button-filter-dashboard {
    width: 279px;
    height: 48px;
    background: var(--brand-2);

    border: 1.5px solid var(--brand-2);
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-size: 16px;
    color: var(--whiteFixed);
    margin-bottom: 60px;
  }

  @media (min-width: 800px) {
    
    ul{
      flex-direction: column;
      overflow: auto;
    }
  }
`;
