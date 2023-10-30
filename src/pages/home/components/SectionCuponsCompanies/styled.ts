import styled from 'styled-components'

export const ContainerCuponsCompanies = styled.section`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  > h1 {
    max-width: 15rem;
    text-align: center;
    justify-self: flex-start;
  }

  > p {
    max-width: 75%;
    margin-top: 1rem;
    text-align: center;
  }
`

export const ContainerCards = styled.div`
  width: 100%;
  min-height: max-content;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  justify-content: center;
  gap: 2rem;

  margin-top: 3rem;
`

export const CardCuponsCompany = styled.div`
  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme.colors['bg-secundary']};
`
