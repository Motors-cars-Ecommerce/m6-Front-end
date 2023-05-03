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

  .image_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    height: 180px;

    .grid-item {
      position: relative;
      overflow: hidden;
    }

    .grid-item img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 800px) {
    height: 377px;
    width: -webkit-fill-available;
    border-radius: 4px;
    padding: 36px 44px;
    background-color: var(--grey-10);

    h6 {
      margin-top: 0px;
    }
  }
`;
