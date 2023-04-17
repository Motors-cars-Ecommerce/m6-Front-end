import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .gallery-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    width: 100%;

    .gallery-item {
      width: calc(33.33% - 10px);
      margin: 0 5px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      &.empty {
        background-color: #ccc;
      }
    }
  }

  @media (min-width: 768px) {
    .gallery-row {
      margin: 20px 0;
      width: 80%;
      justify-content: space-between;

      .gallery-item {
        width: calc(25% - 10px);
        margin: 0;
      }
    }
  }
`;
