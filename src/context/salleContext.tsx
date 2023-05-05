import { createContext, useContext, useEffect, useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/User";
import { iApiModelCar, iModelCar } from "../interfaces/ModelCar";
import { icar } from "../interfaces/Car";

export interface iChildrenProps {
  children: React.ReactNode;
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
  setCarModels: React.Dispatch<React.SetStateAction<iApiModelCar[]>>;
  getAllCarModels: (model: string) => Promise<void>;
  carModel: iApiModelCar | null;
  setCarModel: React.Dispatch<React.SetStateAction<iApiModelCar | null>>;
  getCarModel: (name: string, brand: string) => Promise<void>;
  getSaler: (salerId: string) => Promise<void>;
  sucessModal: boolean;
  setSucessModal: React.Dispatch<React.SetStateAction<boolean>>;
  pachCar: (adData: icar) => Promise<void>;
  deleteCar: () => Promise<void>;
  editAdModal: boolean;
  setEditAdModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteAdModal: boolean;
  setDeleteAdModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAdId: React.Dispatch<React.SetStateAction<string>>;
}

export const SallerContext = createContext({} as iSallerContext);

const SaleProvider = ({ children }: iChildrenProps) => {
  const [saller, setSaller] = useState<IUser | null>(null);
  const [cars, setCars] = useState([] as icar[]);
  const [carsApi, setCarsApi] = useState<any | null>();
  const [carModels, setCarModels] = useState([] as iApiModelCar[]);
  const [carModel, setCarModel] = useState<iApiModelCar | null>(null);
  const [sucessModal, setSucessModal] = useState(false);
  const [editAdModal, setEditAdModal] = useState(false);
  const [deleteAdModal, setDeleteAdModal] = useState(false);
  const [adId, setAdId] = useState("");
  const token = localStorage.getItem("@accessToken");
  const userId = localStorage.getItem("@userID");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadSaller() {
      if (saller) {
        try {
          const { data } = await api.get(`user/${saller?.id}`);
          setSaller(data);
          loadCars(data.id);
        } catch {
          console.log("erro");
        }
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
    if (userId) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post("cars", data);
        loadCars(userId);
        setSucessModal(true);
      } catch {
        console.log("erro");
      }
    }
  };

  const pachCar = async (adData: icar) => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const { data } = await api.patch(`/cars/${adId}`, adData);
    console.log(data);
    if (saller) {
      loadCars(saller?.id);
    }
  };

  const deleteCar = async () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    await api.delete(`/cars/${adId}`);
    if (saller) {
      loadCars(saller?.id);
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
    setAdId,
    editAdModal,
    deleteAdModal,
    setDeleteAdModal,
    setEditAdModal,
    pachCar,
    deleteCar,
  };

  return (
    <SallerContext.Provider value={contextValue}>
      {children}
    </SallerContext.Provider>
  );
};

export default SaleProvider;
