import styled from "styled-components";

export const SellerSectionComponent = styled.section`
  display: flex;
  justify-content: center;
  height: 70vh;
  padding-top: 10%;
  background: linear-gradient(to bottom, var(--brand-1) 25%, white 25%);

  .div-section-seller {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50vh;
    width: 95vw;
    border-radius: 4px;
    background: var(--whiteFixed);

    @media (min-width: 800px) {
      width: 75vw;
    }

    .div-seller-detail {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: flex-start;
      width: 90%;
      height: 80%;
      -webkit-box-pack: start;
      justify-content: space-between;
      background: var(--whiteFixed);

      .image-seller {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        background: var(--brand-1);
        border-radius: 150px;
      }

      .seller-name {
        display: flex;
        align-items: flex-end;
        gap: 5px;

        h3 {
          margin: 0px;
        }
      }
    }
  }
`;
