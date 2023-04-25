import { createContext, useState } from "react";
import api from "../service/api";
import { error } from "console";
import { useNavigate } from "react-router-dom";

export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
}

export interface ILoginRequest {
  token: string;
  user: IUser;
}

export const DataUserContext = createContext({} as any);

export function DataUserProvider({ children }: any) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function userLogin(data: any) {
    api
      .post<ILoginRequest>("/login", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@token", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Login error ->", error);
      });
  }

  return (
    <DataUserContext.Provider
      value={{
        userLogin,
        user,
        setUser,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
}
