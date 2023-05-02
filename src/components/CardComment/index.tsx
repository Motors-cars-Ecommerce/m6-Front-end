import { useContext } from "react";
import { ArticleStyled, OwnerCommentDiv, ContainerCommet } from "./styles";
import { CommentContext } from "../../context/CommentContext";

const CardComment = () => {
  const { comments } = useContext(CommentContext);
  return (
    <ArticleStyled>
      <h2>Comentários</h2>

      {/* essa div marca o inicio e o fim do comentario de algum usuario, entao pode ser componentizado e deve ser! */}
      <ContainerCommet>
        {comments.map((comment) => {
          return (
            <>
              <OwnerCommentDiv>
                <div>
                  <strong>{comment.user?.name}</strong>
                </div>
                <strong>{comment.user?.name}</strong>
                <span>há 3 dias</span>
              </OwnerCommentDiv>

              <p>{comment.text}</p>
            </>
          );
        })}
      </ContainerCommet>
    </ArticleStyled>
  );
};

export default CardComment;
