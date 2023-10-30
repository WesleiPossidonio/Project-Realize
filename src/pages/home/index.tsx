import { SectionHome } from './components/HomeSection'
import { SectionAbout } from './components/SectionAbout'
import { SectionCuponsCompanies } from './components/SectionCuponsCompanies'
import { ContainerHome } from './styled'

export const Home = () => {
  return (
    <ContainerHome>
      <SectionHome />
      <SectionAbout />
      <SectionCuponsCompanies />
    </ContainerHome>
  )
}
