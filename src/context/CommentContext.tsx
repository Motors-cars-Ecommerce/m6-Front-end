import { createContext, useState } from "react";
import { iChildrenProps } from "./salleContext";
import { icomment, icommentRequest } from "../components/InputComment";
import api from "../service/api";
import { icommentUpdate } from "../interfaces/Comment";
import { toast } from "react-toastify";
import axios from "axios";

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
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post("/comments", commentData);
      loadComments(commentData.car);
      toast.success('Comentário adicionado com Sucesso!')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A comunicação com o servidor falhou!");
    }
  };

  const pachComment = async (commentData: icommentUpdate) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/comments/${commentID}`, commentData);
      loadComments(productId);
      toast.success('Comentário editado com Sucesso!')  
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A comunicação com o servidor falhou!");
    }
  };

  const deleteComment = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/comments/${commentID}`);
      loadComments(productId);
      toast.success('Comentário apagado com Sucesso!')
    } catch (error) {
      axios.isAxiosError(error) && console.log(error.response);
      toast.error("A comunicação com o servidor falhou!");
    }
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
