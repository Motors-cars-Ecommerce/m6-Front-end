import { createContext, useState } from "react";
import { iChildrenProps } from "./salleContext";
import { icomment, icommentRequest } from "../components/InputComment";
import api from "../service/api";
import { icar } from "./salleContext";

interface iCommentContext {
  comments: icommentRequest[];
  setComments: React.Dispatch<React.SetStateAction<icommentRequest[]>>;
  loadComments: (productId: string) => Promise<void>;
  createComment: (commentData: icomment) => Promise<void>;
}

export const CommentContext = createContext({} as iCommentContext);

const CommentProvider = ({ children }: iChildrenProps) => {
  const [comments, setComments] = useState([] as icommentRequest[]);

  const token = localStorage.getItem("@accessToken");
  const userId = localStorage.getItem("@userID");

  const loadComments = async (productId: string) => {
    const { data } = await api.get(`/comments/${productId}`);
    setComments(data);
  };

  const createComment = async (commentData: icomment) => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.post("/comments", commentData);
    loadComments(commentData.car);
  };

  const contextValue = {
    comments,
    setComments,
    loadComments,
    createComment,
  };

  return (
    <CommentContext.Provider value={contextValue}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
