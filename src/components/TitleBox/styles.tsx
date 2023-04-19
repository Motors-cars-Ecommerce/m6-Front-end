import styled from "styled-components";

export const TitleBox = styled.section`
  width: 100vw;
  height: 50vh;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  position: relative;

  .title_box_img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;
    img {
      width: 1000px;
      height: 100%;
    }
  }

  .title_box_text {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    h1,
    h2 {
      margin: 0px;
      text-align: center;
    }

    h1 {
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: 0em;
      text-align: center;
    }

    h2 {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
    }
  }

  @media (min-width: 800px) {
    width: 100vw;
    height: 40vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    position: relative;

    img {
      width: 100%;
      position: absolute;
      min-heigth: 450px;
      max-height: 360px;
      z-index: -1;
      min-width: 970px;
      max-width: 1080px;
    }

    .title_box_text {
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      justify-content: center;
      height: 100%;

      h1,
      h2 {
        margin: 0px;
        text-align: center;
      }
    }
  }
`;
