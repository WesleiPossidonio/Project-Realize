import { Routes, Route } from 'react-router-dom'

import { Dashboard } from '../pages/dashboard'
import { Home } from '../pages/home'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/inscreva-se" element={<Register />} />
      <Route path="/home" element={<Home />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
