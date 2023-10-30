import ImageOne from '../../../../assets/Image-church.jpg'
import ImageTwo from '../../../../assets/imagekids2.jpg'
import { TextRegular, TitleText } from '../../../../components/typograph'
import { ContainerAbout, ContainerImages, ContentText, Image } from './styled'

export const SectionAbout = () => {
  return (
    <ContainerAbout>
      <ContentText>
        <TitleText>Lorem ipsum dolor sit amet consectetur</TitleText>
        <TextRegular>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo esse,
          fuga nostrum molestiae sint suscipit ducimus, eaque animi eos sunt
        </TextRegular>
        <TextRegular>
          {' '}
          excepturi, alias ut vero itaque repellendus. Voluptate, voluptatibus!
          Delectus, nesciunt?
        </TextRegular>
      </ContentText>

      <ContainerImages>
        <Image src={ImageTwo} typeImage="imageOne" />
        <Image src={ImageOne} typeImage="imageTwo" />
      </ContainerImages>
    </ContainerAbout>
  )
}
