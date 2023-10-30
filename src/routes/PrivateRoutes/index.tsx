import { Navigate, Outlet } from 'react-router-dom'

import { HeaderDashboard } from '../../components/headerDashboard'
import { ContainerDashboard } from './styled'

export const PrivateRoutes = () => {
  const companies = localStorage.getItem('Monetize:companiesData1.0')

  return companies ? (
    <>
      <HeaderDashboard />
      <ContainerDashboard>
        <Outlet />
      </ContainerDashboard>
    </>
  ) : (
    <Navigate to="login" />
  )
}
