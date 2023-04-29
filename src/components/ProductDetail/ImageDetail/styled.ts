import styled from "styled-components";

export const StyledDivImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 36px 44px;
  gap: 32px;
  background-color: var(--grey-10);
  width: -webkit-fill-available;

  h6 {
    margin-top: 0px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    height: 90px;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    gap: 10px;

    .image_li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 27px 7px;
      width: 24%;
      height: 50%;
      background: var(--grey-10);
      border-radius: 4px;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }

  @media (min-width: 800px) {
    height: 377px;
    width: auto;
    border-radius: 4px;
    padding: 36px 44px;
    background-color: var(--grey-10);

    h6 {
      margin-top: 0px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      height: 130px;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      gap: 10px;
    }

    .image_li {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 27px 7px;
      width: 24%;
      height: 50%;
      background: var(--grey-10);
      border-radius: 4px;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }
`;
