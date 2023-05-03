import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

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

export interface IUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: Date;
  seller: boolean;
  isActive: boolean;
  description: string;
  address: {
    number: string;
    user: any;
    cep: string;
    state: string;
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
  getSaler: (salerId: string) => Promise<void>;
  sucessModal: boolean;
  setSucessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SallerContext = createContext({} as iSallerContext);

const SaleProvider = ({ children }: iChildrenProps) => {
  const [saller, setSaller] = useState<IUser | null>(null);
  const [cars, setCars] = useState([] as icar[]);
  const [carsApi, setCarsApi] = useState<any | null>();
  const [carModels, setCarModels] = useState([] as iModelCar[]);
  const [carModel, setCarModel] = useState<iModelCar | null>(null);
  const [sucessModal, setSucessModal] = useState(false);
  const token = localStorage.getItem("@accessToken");
  const userId = localStorage.getItem("@userID");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadSaller() {
      try {
        const { data } = await api.get(`user/${saller?.id}`);
        setSaller(data);
        loadCars(data.id);
      } catch {
        console.log("erro");
      }
    }

    loadSaller();
    loadCarApi();
  }, []);

  async function loadCars(userId: string) {
    try {
      const { data } = await api.get(`user/${userId}/cars`);
      setCars(data);
    } catch {
      console.log("erro");
    }
  }

  async function loadCarApi() {
    try {
      const { data } = await api.get("https://kenzie-kars.herokuapp.com/cars");
      setCarsApi(data);
    } catch {
      console.log("erro");
    }
  }

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

  const getSaler = async (salerId: string) => {
    const { data } = await api.get(`user/${salerId}`);
    setSaller(data);
    loadCars(data.id);
    loadCarApi();
    navigate("/saler");
  };

  const createNewCar = async (data: icar) => {
    console.log(userId, token);
    if (userId) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        //const newCar = [...cars, data];
        await api.post("cars", data);
        loadCars(userId);
        setSucessModal(true);
      } catch {
        console.log("erro");
      }
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
    getSaler,
    sucessModal,
    setSucessModal,
  };

  return (
    <SallerContext.Provider value={contextValue}>
      {children}
    </SallerContext.Provider>
  );
};

export default SaleProvider;
