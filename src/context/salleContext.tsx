import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";

export interface iSallerProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: Date;
  seller: boolean;
  isActive: boolean;
  address: {
    number: string;
    user: any;
    cep: string;
    street: string;
    city: string;
    complement: string;
    id: string;
  }[];
  cars: [];
}

export interface icar {
  id: string;
  km: number;
  price: number;
  color: string;
  description: string;
  main_image: string;
  model_car: {
    branded: string;
    model: string;
    year: string;
    fuel: string;
  };
  images: {
    image_url: string;
    car: any;
    id: string;
  }[];
  comments: {
    id: string;
    text: string;
    car: any;
    user: any;
  }[];
  user: string;
}

interface iSallerContext {
  saller: IUser | null;
  setSaller: React.Dispatch<React.SetStateAction<IUser | null>>;
  cars: icar[];
  setCars: React.Dispatch<React.SetStateAction<icar[]>>;
  createNewCar: (data: icar) => Promise<void>;
}

export const SallerContext = createContext({} as iSallerContext);

const SaleProvider = ({ children }: iSallerProps) => {
  const [saller, setSaller] = useState<IUser | null>(null);
  const [cars, setCars] = useState([] as icar[]);

  useEffect(() => {
    async function loadSaller() {
      try {
        const { data } = await api.get(
          `user/f2b684cd-fc07-4bc6-8a73-80be024447c9`
        );
        setSaller(data);
      } catch {
        console.log("erro");
      }
    }

    async function loadCars() {
      try {
        const { data } = await api.get(
          `user/f2b684cd-fc07-4bc6-8a73-80be024447c9/cars`
        );
        setCars(data);
      } catch {
        console.log("erro");
      }
    }
    loadSaller();
    loadCars();
  }, []);

  const createNewCar = async (data: icar) => {
    try {
      const newCar = [...cars, data];
      await api.post("cars", data);
      console.log(newCar);
      setCars(newCar);
    } catch {
      console.log("erro");
    }
  };

  const contextValue = {
    saller,
    setSaller,
    cars,
    setCars,
    createNewCar,
  };

  return (
    <SallerContext.Provider value={contextValue}>
      {children}
    </SallerContext.Provider>
  );
};

export default SaleProvider;
