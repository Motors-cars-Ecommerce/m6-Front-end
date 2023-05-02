import { createContext, useEffect, useState } from "react";
import { iChildrenProps } from "./salleContext";
import { icar } from "./salleContext";
import { error } from "console";
import api from "../service/api";

interface iDashboardContext {
  filterMobile: boolean;
  setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DashboardContext = createContext({} as iDashboardContext);

const DashboardProvider = ({ children }: iChildrenProps) => {
  const [filterMobile, setFilterMobile] = useState<boolean>(false);
  const [carFiltered, setCarFiltered] = useState([] as icar[]);
  const [car, setCar] = useState([] as icar[]);

  useEffect(() => {
    const loadCars = async () => {
      try {
        const { data } = await api.get("/cars");
        setCar(data);
        filterCar();
      } catch {
        console.log("error");
      }
    };
    loadCars();
  }, []);

  const filterCar = () => {
    setCarFiltered(car);
  };

  const filterByBrand = (brand: string) => {
    const filteredCars = carFiltered.filter(
      (c) => c.model_car.branded === brand
    );
    setCarFiltered(filteredCars);
  };

  const filterByModel = (model: string) => {
    const filteredCars = car.filter((c) => c.model_car.model === model);
    setCarFiltered(filteredCars);
  };

  const filterByYear = (year: string) => {
    const filteredCars = car.filter((c) => c.model_car.year === year);
    setCarFiltered(filteredCars);
  };

  const filterByColor = (color: string) => {
    const filteredCars = carFiltered.filter((c) => c.color === color);
    setCarFiltered(filteredCars);
  };

  const filterByPrice = (minorValue: number, majorValue: number) => {
    const filteredCars = carFiltered.filter(
      (c) => minorValue <= c.price && c.price >= majorValue
    );
    setCarFiltered(filteredCars);
  };

  const filterByKM = (minorValue: number, majorValue: number) => {
    const filteredCars = carFiltered.filter(
      (c) => minorValue <= c.km && c.price >= majorValue
    );
    setCarFiltered(filteredCars);
  };

  const filterByFuel = (fuel: string) => {
    const filteredCars = carFiltered.filter((c) => c.model_car.fuel === fuel);
    setCarFiltered(filteredCars);
  };

  return (
    <DashboardContext.Provider value={{ setFilterMobile, filterMobile }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
