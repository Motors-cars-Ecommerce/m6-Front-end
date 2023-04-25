import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

export const GalleryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;

  @media (min-width: 768px) {
    margin: 2rem 0;
    width: 80%;
    justify-content: space-between;
  }
`;

export const GalleryItem = styled.div`
  width: calc(33.33% - 1rem);
  margin: 0.5rem;
  height: 0;
  padding-bottom: 100%;
  position: relative;
  background-color: #f2f2f2;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.empty {
    background-color: #ccc;
  }

  @media (min-width: 768px) {
    width: calc(25% - 1rem);
    margin: 0;
  }
`;
