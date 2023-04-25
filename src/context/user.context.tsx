import { ReactNode, createContext, useState } from "react";
import ModalCadastre from "../components/ModalCadastre";

interface IUserContext {
  onSubmitFunc: (data: any) => void;
}

interface IUserContextProps {
  children: ReactNode;
}
// ainda falta ser tipado

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [dataUser, setDataUser] = useState(null);

  const onSubmitFunc = (data: any) => {
    console.log(data);
  };
  return (
    <UserContext.Provider
      value={{
        onSubmitFunc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
