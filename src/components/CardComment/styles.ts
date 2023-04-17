import styled from "styled-components";

const ArticleStyled = styled.article`
  background-color: var(--grey-10);

  max-width: 752px;
  min-width: 375px;
  width: 47%;

  height: 557px;

  border-radius: 4px;
  padding: 36px 44px 36px 44px;
`;

const ContainerCommet = styled.div`
  margin-top: 24px;
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--grey-2);
  }
`;
const OwnerCommentDiv = styled.div`
  width: 220px;
  height: 35px;

  /* background-color: green; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 32px;
    height: 32px;

    background-color: var(--random-5);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    strong {
      font-size: 14px;
      font-weight: 500;
      color: var(--whiteFixed);
    }

    span {
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      color: var(--grey-3);
    }
  }
  strong {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: var(--grey-3);
  }
`;

export { ArticleStyled, OwnerCommentDiv, ContainerCommet };
