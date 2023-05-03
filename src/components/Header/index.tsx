import styled from "styled-components";

export const Header = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 8vh;
  padding-left: 10px;

  .header_tittle {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5px;

    background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
    -webkit-background-clip: text;
    color: transparent;

    h2,
    h3 {
      margin: 0px;
    }
  }

  .hidden {
    display: none !important;
  }

  .menu_options_mobile {
    position: absolute;
    right: 0px;
    width: 95vw;
    background: var(--whiteFixed);
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
    gap: 30px;
    z-index: 5;
    padding: 24px 2.5vw;
    padding-bottom: 24px;

    .singup {
      width: 100% !important;
    }

    background: var(--grey-9);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .user_options_mobile {
    display: flex;
    flex-direction: column;
    gap: 15px;

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 28px;

      color: var(--grey-2);

      cursor: pointer;
    }
  }

  .header-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    background-color: var(--whiteFixed);
    height: 40vh;
    width: 40vw;
  }

  .header_div_user,
  .hidden-menu {
    display: none;
  }

  .listAppear {
    animation: appearFromTopCenter 1s;
  }

  .listDesappear {
    animation: desappearFromTopCenter 1s;
  }

  .div-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
  }

  .header_buttons,
  .header_user {
    display: none;
  }

  .div-show-menu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 30px;
  }

  #checkbox-menu {
    position: absolute;
    opacity: 0;
  }

  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 16px;
    width: 21px;
  }

  label span {
    position: absolute;
    display: block;
    height: 3px;
    width: 100%;
    border-radius: 30px;
    background: #727272;
    transition: 0.25s ease-in-out;
  }

  label span:nth-child(1) {
    top: 0;
  }

  label span:nth-child(2) {
    top: 8px;
  }

  label span:nth-child(3) {
    top: 16px;
  }

  #checkbox-menu:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 8px;
  }

  #checkbox-menu:checked + label span:nth-child(2) {
    opacity: 0;
  }

  #checkbox-menu:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 8px;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 40px;
    height: 76px;

    .div_mobile,
    .div-show-menu {
      display: none;
    }

    .header_div_user {
      width: 244px;
      border-left: 1.5px solid var(--grey-4);
      padding-left: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .user_options {
      display: flex;
      position: absolute;
      z-index: 8;
      flex-direction: column;
      gap: 8px;
      padding: 21px;
      top: 76px;
      width: 218px;

      background: var(--grey-9);
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
      border-radius: 0px 4px;

      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;

        color: var(--grey-2);

        cursor: pointer;
      }
    }

    .header_tittle {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 5px;

      background: linear-gradient(90deg, #0b0d0d -1.61%, #4529e6 100.99%);
      -webkit-background-clip: text;
      color: transparent;

      h2,
      h3 {
        margin: 0px;
      }
    }

    .header_buttons {
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px;
      gap: 44px;
      width: 313px;
      height: 100%;
      border-left: 1.5px solid var(--grey-4);
      justify-content: space-around;

      button {
        cursor: pointer;
      }
    }

    .header_user {
      display: flex;
      flex-direction: row;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px;
      gap: 8px;
      width: 214px;
      height: 79px;

      span {
        height: 32px;
        width: 32px;
        border-radius: 150px;
        background: var(--brand-2);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
