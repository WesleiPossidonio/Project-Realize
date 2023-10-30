import { SectionHome } from './components/HomeSection'
import { SectionAbout } from './components/SectionAbout'
import { SectionContact } from './components/SectionContact'
import { SectionCuponsCompanies } from './components/SectionCuponsCompanies'
import SectionFaq from './components/sectionFaq'
import { SectionImages } from './components/SectionImages'
import { ContainerHome } from './styled'

export const Home = () => {
  return (
    <ContainerHome>
      <SectionHome />
      <SectionAbout />
      <SectionImages />
      <SectionCuponsCompanies />
      <SectionFaq />
      <SectionContact />
    </ContainerHome>
  )
}
