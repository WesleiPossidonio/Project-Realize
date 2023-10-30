import { ReactNode } from 'react'

import { DataCompanyProvider } from './companyContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <DataCompanyProvider>{children}</DataCompanyProvider>
}
