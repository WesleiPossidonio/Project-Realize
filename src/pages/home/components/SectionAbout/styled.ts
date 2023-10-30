import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 40rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`
export const ContentText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContainerImages = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`

interface ImageProps {
  typeImage: string
}

export const Image = styled.img<ImageProps>`
  width: 10.8rem;

  margin-top: ${({ typeImage }) => typeImage === 'imageOne' && '6.8rem'};
`
