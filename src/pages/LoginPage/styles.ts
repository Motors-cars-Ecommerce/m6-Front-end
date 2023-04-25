import styled from "styled-components";

export const LoginPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f5;

  .containerLogin {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: #fdfdfd;
    border-radius: 4px;

    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      h2 {
        font-size: 24px;
        margin-bottom: 16px;
      }

      section {
        gap: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;

        p {
          font-family: "Inter";
          font-weight: 500;
          font-size: 14px;
          color: #212529;
          margin-bottom: 4px;
        }
      }

      p {
        margin-top: -14px;
        margin-bottom: 10px;
        font-size: 12px;
        color: red;
        text-align: right;
        width: 100%;
      }

      .forgottenPassWord {
        display: flex;
        align-items: flex-end;
      }

      button {
        margin-top: 24px;
        padding: 8px 16px;
        width: 286.09px;
        height: 48px;
        background-color: #3007d3;
        color: #fff;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #3007d3;
        }
      }
    }

    p {
      font-size: 14px;
      margin-top: 16px;
      margin-bottom: 0;
    }

    a {
      font-size: 16px;
      font-weight: 500;
      color: #212529;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #3007d3;
      }
    }
  }

  @media (min-width: 768px) {
    .containerLogin {
      padding: 44px 48px;

      form {
        align-items: flex-start;

        h2 {
          font-size: 32px;
        }

        section {
          width: auto;

          input {
            width: 217px;
          }
        }
        .forgottenPassWord {
          display: flex;
          align-items: flex-end;
        }
        p {
          width: auto;
        }

        button {
          margin-top: 32px;
        }
      }
    }
  }
`;
