import { FormLoginCompanies } from './coponents/FormLogin'
import {
  ContainerForm,
  ContainerLogin,
  ContainerLogo,
  ContentLogin,
} from './styled'

export const Login = () => {
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContainerLogo>
          <p>LOGO</p>
        </ContainerLogo>

        <ContainerForm>
          <h1>Login</h1>

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
