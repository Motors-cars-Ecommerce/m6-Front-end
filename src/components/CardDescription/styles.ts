import styled from "styled-components";

const ArticleStyled = styled.article`
  width: -webkit-fill-available;
  background-color: var(--grey-10);
  border-radius: 4px;
  padding: 28px 44px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: var(--grey-1);
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: var(--grey-2);
  }
`;

export { ArticleStyled };
