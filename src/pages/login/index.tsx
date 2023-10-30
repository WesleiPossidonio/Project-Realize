import { useNavigate } from 'react-router-dom'

import { FormLoginCompanies } from './coponents/FormLogin'
import {
  ContainerForm,
  ContainerLogin,
  ContainerLogo,
  ContentLogin,
} from './styled'

export const Login = () => {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/home')
  }
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContainerLogo>
          <p>LOGO</p>
        </ContainerLogo>

        <ContainerForm>
          <h1>Login</h1>

          <p onClick={handleNavigateHome}>Ir a Home</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
            earum,{' '}
          </p>
          <FormLoginCompanies />
        </ContainerForm>
      </ContentLogin>
    </ContainerLogin>
  )
}
