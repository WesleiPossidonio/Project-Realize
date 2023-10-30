import styled from 'styled-components'

export const ContainerImages = styled.section`
  width: 100%;
  height: 20rem;

  display: grid;
  grid-template-columns: repeat(4, minmax(6rem, 30rem));
  justify-content: center;
`
export const CardsImages = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors['base-input']};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors['bg-home']};
  }

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors['bg-secundary']};
  }
`
