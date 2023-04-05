import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';

export const RoutesMain = () => {
  return(
    <Routes>
       <Route path="/" element={<Dashboard />} />
    </Routes>
  )

}
;