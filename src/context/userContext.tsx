import jwt_decode from "jwt-decode";
import { createContext, useState } from "react";
import api from "../service/api";
import { error } from "console";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../interfaces/User";

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

interface iUserContext {
  user: {};
  login: (data: ILogin) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<{}>>;
}

export const DataUserContext = createContext({} as iUserContext);

export function DataUserProvider({ children }: any) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function userLogin(data: ILogin) {
    api
      .post<ILoginRequest>("/login", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("@token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log("Login error ->", error);
      });
  }

  const login = async (data: ILogin) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      const decodedToken: any = jwt_decode(token); // Decodifica o token de acesso
      const userId = decodedToken?.id;
      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@accessToken", token);
      localStorage.setItem("@userID", userId);
      navigate("/");
    } catch {
      console.log("erro");
    }
  };

  return (
    <DataUserContext.Provider
      value={{
        user,
        setUser,
        login,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
}
