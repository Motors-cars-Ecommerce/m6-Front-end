import styled from "styled-components";

export const SellerPage = styled.section`
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: scroll;
    padding-left: 10px;
    padding-bottom: 15px;

    @media (min-width: 800px) {
      padding-left: 40px;
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
    }
  }
`;
