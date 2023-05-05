import { useContext, useState } from "react";
import {
  ArticleStyled,
  OwnerCommentDiv,
  ContainerCommet,
  OptionsCommentStuyled,
  CommentDiv,
} from "./styles";
import { CommentContext } from "../../context/CommentContext";
import { DataUserContext } from "../../context/userContext";
import { CgTrashEmpty } from "react-icons/cg";
import { AiFillEdit } from "react-icons/ai";
import { DeleteCommentModal } from "./deleteCommentModal";
import { EditCommentModal } from "./editCommentModal";

const CardComment = () => {
  const { comments, setDeleteCommentModal, setCommentId, setEditCommentModal } =
    useContext(CommentContext);
  const { user } = useContext(DataUserContext);

  const [showDivOption, setDivOptions] = useState(false);

  const deleteComment = (commentId: string) => {
    setCommentId(commentId);
    setDeleteCommentModal(true);
  };

  const editComment = (commentId: string) => {
    setCommentId(commentId);
    setEditCommentModal(true);
  };

  return (
    <ArticleStyled>
      <h2>Comentários</h2>

      {/* essa div marca o inicio e o fim do comentario de algum usuario, entao pode ser componentizado e deve ser! */}
      <ContainerCommet>
        <DeleteCommentModal />
        <EditCommentModal />
        {comments.map((comment) => {
          return (
            <CommentDiv>
              <div onClick={() => setDivOptions(!showDivOption)}>
                <OwnerCommentDiv>
                  <div>
                    <strong>{comment.user?.name[0]}</strong>
                  </div>
                  <strong>{comment.user?.name}</strong>
                  <span>há 3 dias</span>
                </OwnerCommentDiv>
                <p>{comment.text}</p>
              </div>
              {user?.id == comment?.user?.id ? (
                showDivOption ? (
                  <OptionsCommentStuyled>
                    <CgTrashEmpty onClick={() => deleteComment(comment.id)} />
                    <AiFillEdit onClick={() => editComment(comment.id)} />
                  </OptionsCommentStuyled>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </CommentDiv>
          );
        })}
      </ContainerCommet>
    </ArticleStyled>
  );
};

export default CardComment;
