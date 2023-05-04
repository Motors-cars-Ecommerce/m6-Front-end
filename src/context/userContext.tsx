import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import api from "../service/api";
import { error } from "console";
import { useNavigate } from "react-router-dom";
import {
  ICadastre,
  ILogin,
  IRegisterBodyNotConfirmPassword,
  IUser,
} from "../interfaces/User";

/* export interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
} */

export interface ILoginRequest {
  token: string;
  user: IUser;
}

export interface IRegisterAddressesRequest {}

export interface IRegisterRequest {
  name: string;
  email: string;
  cpf: string;
  password: string;
  phone: string;
  description: string;
  birthday: Date;
  seller: boolean;
  isActive: boolean;
  address: {
    number: string;
    cep: string;
    street: string;
    city: string;
    complement: string;
  }[];
}

interface iUserContext {
  user: IUser | null;
  login: (data: ILogin) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  createdUser: (data: IRegisterBodyNotConfirmPassword) => Promise<void>;
  mudarCorDobotaoAnunciante: () => void;
  mudarCorBotaoComprador: () => void;
  mudarCorAnunciante: string;
  mudarCorComprador: string;
}

export const DataUserContext = createContext({} as iUserContext);

export function DataUserProvider({ children }: any) {
  const [user, setUser] = useState({} as IUser | null);
  const navigate = useNavigate();
  const token = localStorage.getItem("@accessToken");
  const userId = localStorage.getItem("@userID");

  const [mudarCorAnunciante, setMudarCorAnunciante] = useState(
    "normal" as string
  );
  const [mudarCorComprador, setMudarCorComprador] = useState(
    "normal" as string
  );

  const mudarCorDobotaoAnunciante = () => {
    setMudarCorAnunciante("roxo");
    setMudarCorComprador("normal");
  };

  const mudarCorBotaoComprador = () => {
    setMudarCorComprador("roxo");
    setMudarCorAnunciante("normal");
  };

  useEffect(() => {
    try {
      if (userId) {
        getUser(userId);
      } else setUser(null);
    } catch {
      console.log("error");
    }
  }, []);

  const login = async (data: ILogin) => {
    try {
      const response = await api.post("/login", data);
      const { token } = response.data;
      const decodedToken: any = jwt_decode(token); // Decodifica o token de acesso
      const userId = decodedToken?.id;
      api.defaults.headers.authorization = `Bearer ${token}`;
      localStorage.setItem("@accessToken", token);
      localStorage.setItem("@userID", userId);
      getUser(userId);
      navigate("/");
    } catch {
      console.log("erro");
    }
  };

  const getUser = async (userId: string) => {
    try {
      const { data } = await api.get(`/user/${userId}`);
      setUser(data);
    } catch {
      console.log("erro");
    }
  };

  const createdUser = async (data: IRegisterBodyNotConfirmPassword) => {
    await api
      .post("/user", data)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("Cadastro deu errado ==>>", error);
      });
  };

  return (
    <DataUserContext.Provider
      value={{
        user,
        setUser,
        login,
        createdUser,
        mudarCorDobotaoAnunciante,
        mudarCorBotaoComprador,
        mudarCorAnunciante,
        mudarCorComprador,
      }}
    >
      {children}
    </DataUserContext.Provider>
  );
}
