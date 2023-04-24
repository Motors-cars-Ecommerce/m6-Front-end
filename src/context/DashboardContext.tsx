import { createContext } from 'react'
import { iChildrenProps } from './salleContext'

export const DashboardContext = createContext({})


const DashboardProvider = ({children}:iChildrenProps) => {


  return (
    <DashboardContext.Provider value={'colocar aqui funções dentro do contexto dentro de {}'}>
        {children}
    </DashboardContext.Provider>
  )
}

export default DashboardProvider

