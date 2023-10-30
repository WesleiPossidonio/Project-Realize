import { FormRegister } from './components/FormRegister'
import {
  ContainerForm,
  ContainerLogin,
  ContainerLogo,
  ContentLogin,
} from './styled'

export const Register = () => {
  return (
    <ContainerLogin>
      <ContentLogin>
        <ContainerLogo>
          <p>LOGO</p>
        </ContainerLogo>

        <ContainerForm>
          <h1>Inscreva-se</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste
            earum,{' '}
          </p>
          <FormRegister />
        </ContainerForm>
      </ContentLogin>
    </ContainerLogin>
  )
}
