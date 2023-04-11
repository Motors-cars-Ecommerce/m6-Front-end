import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import HomeCarCard from '../components/HomeCarCard/HomeCarCard';

export const RoutesMain = () => {
  return(
    <Routes>
       <Route path="/" element={<HomeCarCard />} />
    </Routes>
  )

}
;