import { createContext, useState } from 'react'
import { iChildrenProps } from './salleContext'


interface iDashboardContext{
    filterMobile: boolean,
    setFilterMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export const DashboardContext = createContext({} as iDashboardContext)



const DashboardProvider = ({children}:iChildrenProps) => {

    const [filterMobile, setFilterMobile] = useState<boolean>(false)


  return (
    <DashboardContext.Provider value={{setFilterMobile, filterMobile}}>
        {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider

