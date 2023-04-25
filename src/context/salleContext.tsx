import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";

export interface iModelCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iChildrenProps {
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
  images: { image_url: string }[];
  comments: {
    id: string;
    text: string;
    car: any;
    user: any;
  }[];
  user: IUser | null;
}

interface iSallerContext {
  saller: IUser | null;
  setSaller: React.Dispatch<React.SetStateAction<IUser | null>>;
  cars: icar[];
  setCars: React.Dispatch<React.SetStateAction<icar[]>>;
  createNewCar: (data: icar) => Promise<void>;
  carsApi: any;
  setCarsApi: React.Dispatch<any>;
  carModels: iModelCar[];
  setCarModels: React.Dispatch<React.SetStateAction<iModelCar[]>>;
  getAllCarModels: (model: string) => Promise<void>;
  carModel: iModelCar | null;
  setCarModel: React.Dispatch<React.SetStateAction<iModelCar | null>>;
  getCarModel: (name: string, brand: string) => Promise<void>;
}

export const SallerContext = createContext({} as iSallerContext);

const SaleProvider = ({ children }: iChildrenProps) => {
  const [saller, setSaller] = useState<IUser | null>(null);
  const [cars, setCars] = useState([] as icar[]);
  const [carsApi, setCarsApi] = useState<any | null>();
  const [carModels, setCarModels] = useState([] as iModelCar[]);
  const [carModel, setCarModel] = useState<iModelCar | null>(null);

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

    async function loadCarApi() {
      try {
        const { data } = await api.get(
          "https://kenzie-kars.herokuapp.com/cars"
        );
        setCarsApi(data);
      } catch {
        console.log("erro");
      }
    }

    loadSaller();
    loadCars();
    loadCarApi();
  }, []);

  const getAllCarModels = async (model: string) => {
    const { data } = await api.get(
      `https://kenzie-kars.herokuapp.com/cars?brand=${model}`
    );
    setCarModels(data);
  };

  const getCarModel = async (name: string, brand: string) => {
    const { data } = await api.get(
      `https://kenzie-kars.herokuapp.com/cars?brand=${brand}`
    );
    data.map((key: any) => {
      if (key.name === name) {
        setCarModel(key);
      }
    });
  };

  const createNewCar = async (data: icar) => {
    try {
      const newCar = [...cars, data];
      await api.post("cars", data);
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
    carsApi,
    setCarsApi,
    carModels,
    setCarModels,
    getAllCarModels,
    carModel,
    setCarModel,
    getCarModel,
  };

  return (
    <SallerContext.Provider value={contextValue}>
      {children}
    </SallerContext.Provider>
  );
};

export default SaleProvider;
