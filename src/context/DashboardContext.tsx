import { createContext, useState } from 'react'
import { iChildrenProps } from './salleContext'


interface iDashboardContext{
    filterMobile: boolean,
    setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>,
    modalEditProfile: boolean,
    setModalEditProfile: React.Dispatch<React.SetStateAction<boolean>>,
    modalEditAddress: boolean,
    setModalEditAddress: React.Dispatch<React.SetStateAction<boolean>>,
}

export const DashboardContext = createContext({} as iDashboardContext)



const DashboardProvider = ({children}:iChildrenProps) => {

    const [filterMobile, setFilterMobile] = useState<boolean>(false)

    const [ modalEditProfile, setModalEditProfile ] = useState<boolean>(false)
    const [ modalEditAddress, setModalEditAddress ] = useState<boolean>(false)


  return (
    <DashboardContext.Provider value={{setFilterMobile, filterMobile, modalEditProfile, setModalEditProfile, modalEditAddress, setModalEditAddress}}>
        {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider

