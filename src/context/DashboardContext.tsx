import { createContext, useEffect, useState } from "react";
import { iChildrenProps } from "./salleContext";
import { icar } from "../interfaces/Car";
import { error } from "console";
import api from "../service/api";


interface iDashboardContext {
  filterMobile: boolean;
  setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditProfile: boolean;
  setModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditAddress: boolean;
  setModalEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
  modalPasswordRecovery: boolean,
  setModalPasswordRecovery: React.Dispatch<React.SetStateAction<boolean>>,
  carsFiltered: icar[];
  setCarsFiltered: React.Dispatch<React.SetStateAction<icar[]>>;
  cars: icar[];
  setCars: React.Dispatch<React.SetStateAction<icar[]>>;
  filterByBrand: (brand: string) => void;
  filterByModel: (model: string) => void;
  filterByColor: (color: string) => void;
  filterByFuel: (fuel: string) => void;
  filterByYear: (year: string) => void;
  filterByMaxKM: () => void;
  resetCarsFiltered: () => void;
  setMaxKm: React.Dispatch<React.SetStateAction<number>>;
  maxKm: number;
  setMinKm: React.Dispatch<React.SetStateAction<number>>;
  minPrice: number;
  minKm: number;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  filterByMaxPrice: () => void;
  filterByMinPrice: () => void;
  loadCars: () => Promise<void>

}

export const DashboardContext = createContext({} as iDashboardContext);

const DashboardProvider = ({ children }: iChildrenProps) => {
  const [modalEditProfile, setModalEditProfile] = useState<boolean>(false);
  const [modalEditAddress, setModalEditAddress] = useState<boolean>(false);
  const [ modalPasswordRecovery, setModalPasswordRecovery ] = useState<boolean>(false)
  const [filterMobile, setFilterMobile] = useState<boolean>(false);
  const [carsFiltered, setCarsFiltered] = useState([] as icar[]);
  const [carsFilteredKm, setCarsFilteredKm] = useState([] as icar[]);
  const [carsFilteredMinKm, setCarsFilteredMinKm] = useState([] as icar[]);
  const [carsFilteredPrice, setCarsFilteredPrice] = useState([] as icar[]);
  const [cars, setCars] = useState([] as icar[]);
  const [maxKm, setMaxKm] = useState(0);
  const [minKm, setMinKm] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const { data } = await api.get("/cars");
      setCars(data);
      filterCar(data);
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    filterByMinKM();
  }, [minKm]);

  useEffect(() => {
    filterByMaxKM();
  }, [maxKm]);

  useEffect(() => {
    filterByMaxPrice();
  }, [maxPrice]);

  useEffect(() => {
    filterByMinPrice();
  }, [minPrice]);

  const filterCar = (data: icar[]) => {
    setCarsFiltered(data);
    setCarsFilteredKm(data);
    setCarsFilteredMinKm(data);
  };

  const filterByBrand = (brand: string) => {
    const filteredCars = carsFiltered.filter(
      (c) => c.model_car.branded === brand
    );
    filterCar(filteredCars);
  };

  const filterByModel = (model: string) => {
    const filteredCars = carsFiltered.filter(
      (c) => c.model_car.model === model
    );
    filterCar(filteredCars);
  };

  const filterByYear = (year: string) => {
    const filteredCars = cars.filter((c) => c.model_car.year === year);
    filterCar(filteredCars);
  };

  const filterByColor = (color: string) => {
    const filteredCars = carsFiltered.filter((c) => c.color === color);
    filterCar(filteredCars);
  };

  const filterByFuel = (fuel: string) => {
    const filteredCars = carsFiltered.filter((c) => c.model_car.fuel === fuel);
    filterCar(filteredCars);
  };

  
  const filterByMaxKM = () => {
    if (maxKm > 0) {
      if (minKm > 0) {
        const filteredCars = cars.filter((c) => c.km <= maxKm && c.km >= minKm);
        setCarsFiltered(filteredCars);
      } else {
        const filteredCars = cars.filter((c) => c.km <= maxKm);
        setCarsFiltered(filteredCars);
      }
    } else if (minKm > 0) {
      const filteredCars = cars.filter((c) => c.km >= minKm);
      setCarsFiltered(filteredCars);
    } else {
      setCarsFiltered(cars);
    }
  };
  
  const filterByMinKM = () => {
    if (minKm > 0) {
      if (maxKm > 0) {
        const filteredCars = cars.filter((c) => c.km >= minKm && c.km <= maxKm);
        setCarsFiltered(filteredCars);
      } else {
        const filteredCars = cars.filter((c) => c.km >= minKm);
        setCarsFiltered(filteredCars);
      }
    } else if (maxKm > 0) {
      const filteredCars = cars.filter((c) => c.km <= maxKm);
      setCarsFiltered(filteredCars);
    } else {
      setCarsFiltered(cars);
    }
  };
  
  const filterByMaxPrice = () => {
    if (maxPrice > 0) {
      if (minPrice > 0) {
        const filteredCars = cars.filter((c) => c.price <= maxPrice && c.price >= minPrice);
        setCarsFiltered(filteredCars);
      } else {
        const filteredCars = cars.filter((c) => c.price <= maxPrice);
        setCarsFiltered(filteredCars);
      }
    } else if (minPrice > 0) {
      const filteredCars = cars.filter((c) => c.price >= minPrice);
      setCarsFiltered(filteredCars);
    } else {
      setCarsFiltered(cars);
    }
  };
  
  const filterByMinPrice = () => {
    if (minPrice > 0) {
      if (maxPrice > 0) {
        const filteredCars = cars.filter((c) => c.price >= minPrice && c.price <= maxPrice);
        setCarsFiltered(filteredCars);
      } else {
        const filteredCars = cars.filter((c) => c.price >= minPrice);
        setCarsFiltered(filteredCars);
      }
    } else if (maxKm > 0) {
      const filteredCars = cars.filter((c) => c.price <= maxPrice);
      setCarsFiltered(filteredCars);
    } else {
      setCarsFiltered(cars);
    }
  };
  

  const resetCarsFiltered = () => {
    setCarsFiltered(cars);
    setCarsFilteredKm(cars);
  };

  return (
    <DashboardContext.Provider
      value={{
        setFilterMobile,
        filterMobile,
        modalEditProfile,
        setModalEditProfile,
        modalEditAddress,
        setModalEditAddress,
        modalPasswordRecovery, 
        setModalPasswordRecovery,
        cars,
        carsFiltered,
        setCars,
        setCarsFiltered,
        filterByBrand,
        filterByModel,
        filterByColor,
        filterByFuel,
        filterByYear,
        filterByMaxPrice,
        filterByMinPrice,
        filterByMaxKM,
        resetCarsFiltered,
        setMaxKm,
        maxKm,
        setMinKm,
        minKm,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        minPrice,
        loadCars
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
