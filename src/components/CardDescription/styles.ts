import styled from "styled-components";

const ArticleStyled = styled.article`
  max-width: 752px;
  min-width: 375px;
  width: 47%;
  height: 213px;

  padding: 36px 44px 36px 44px;

  background-color: var(--grey-10);
  border-radius: 4px;

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
