import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 100%;
  height: 40rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`
