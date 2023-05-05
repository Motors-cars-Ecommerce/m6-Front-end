import { createContext, useState } from "react";
import { iChildrenProps } from "./salleContext";
import { icomment, icommentRequest } from "../components/InputComment";
import api from "../service/api";
import { icommentUpdate } from "../interfaces/Comment";

interface iCommentContext {
  comments: icommentRequest[];
  setComments: React.Dispatch<React.SetStateAction<icommentRequest[]>>;
  loadComments: (productId: string) => Promise<void>;
  createComment: (commentData: icomment) => Promise<void>;
  pachComment: (commentData: icommentUpdate) => Promise<void>;
  deleteComment: () => Promise<void>;
  editCommentModal: boolean;
  setEditCommentModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCommentModal: boolean;
  setDeleteCommentModal: React.Dispatch<React.SetStateAction<boolean>>;
  commentID: string;
  setCommentId: React.Dispatch<React.SetStateAction<string>>;
}

export const CommentContext = createContext({} as iCommentContext);

const CommentProvider = ({ children }: iChildrenProps) => {
  const [comments, setComments] = useState([] as icommentRequest[]);
  const [editCommentModal, setEditCommentModal] = useState(false);
  const [deleteCommentModal, setDeleteCommentModal] = useState(false);
  const [commentID, setCommentId] = useState("");
  const [productId, setProductId] = useState("");

  const token = localStorage.getItem("@accessToken");
  const userId = localStorage.getItem("@userID");

  const loadComments = async (productId: string) => {
    setProductId(productId);
    const { data } = await api.get(`/comments/${productId}`);
    setComments(data);
  };

  const createComment = async (commentData: icomment) => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.post("/comments", commentData);
    loadComments(commentData.car);
  };

  const pachComment = async (commentData: icommentUpdate) => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.patch(`/comments/${commentID}`, commentData);
    loadComments(productId);
  };

  const deleteComment = async () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.delete(`/comments/${commentID}`);
    loadComments(productId);
  };

  const contextValue = {
    comments,
    setComments,
    loadComments,
    createComment,
    deleteComment,
    pachComment,
    editCommentModal,
    setDeleteCommentModal,
    setEditCommentModal,
    deleteCommentModal,
    commentID,
    setCommentId,
  };

  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
