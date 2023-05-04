import styled from "styled-components";

const ArticleStyled = styled.article`
  width: -webkit-fill-available;
  height: 370px;

  background-color: var(--grey-10);
  border-radius: 4px;
  padding: 28px 44px;
  overflow-x: scroll;
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

const OptionsCommentStuyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;

  svg {
    cursor: pointer;
  }
`;

const CommentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export {
  ArticleStyled,
  OwnerCommentDiv,
  ContainerCommet,
  OptionsCommentStuyled,
  CommentDiv,
};
