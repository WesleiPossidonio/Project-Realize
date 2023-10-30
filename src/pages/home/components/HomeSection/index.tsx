import { TextRegular, TitleText } from '../../../../components/typograph'
import {
  Button,
  ContainerSection,
  ContainerText,
  Form,
  InputSearch,
} from './styled'

export const SectionHome = () => {
  return (
    <ContainerSection>
      <ContainerText>
        <TitleText size="l" weight={600}>
          Lorem ipsum dolor sit amet consectetur
        </TitleText>

        <TextRegular size="s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          soluta officiis perspiciatis labore facere. Facere alias, odio,
        </TextRegular>

        <Form action="">
          <InputSearch type="search" placeholder="Buscar Empresas" />
          <Button>Buscar</Button>
        </Form>
      </ContainerText>
    </ContainerSection>
  )
}
