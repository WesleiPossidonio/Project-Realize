import { TextRegular, TitleText } from '../../../../components/typograph'
import {
  CardCuponsCompany,
  ContainerCards,
  ContainerCuponsCompanies,
} from './styled'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

export const SectionCuponsCompanies = () => {
  return (
    <ContainerCuponsCompanies>
      <TitleText>Nossos Cupons de Desconto</TitleText>

      <TextRegular>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo
        obcaecati ut natus, amet provident, officia nisi voluptatibus impedit
        cupiditate labore sunt minima fugit.
      </TextRegular>
      <ContainerCards>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
        <CardCuponsCompany></CardCuponsCompany>
      </ContainerCards>
    </ContainerCuponsCompanies>
  )
}
