import { useState } from 'react'

import { useDataCompany } from '../../contexts/companyContext'
import { TextRegular } from '../typograph'
import { ContainerMenu, LinkMenu } from './styled'

export const MenuDashboard = () => {
  const { stateMenu } = useDataCompany()

  const [statLink, setStateLink] = useState('')

  const handleStateLink = (data: string) => {
    setStateLink(data)
  }

  return (
    <ContainerMenu stateMenu={stateMenu}>
      <LinkMenu
        onClick={() => handleStateLink('Mydata')}
        statLink={statLink === 'Mydata' && true}
      >
        <TextRegular weight={600}>Meus Dados</TextRegular>
      </LinkMenu>

      <LinkMenu
        onClick={() => handleStateLink('MyVacancy')}
        statLink={statLink === 'MyVacancy' && true}
      >
        <TextRegular weight={600}>Minhas Vagas</TextRegular>
      </LinkMenu>

      <LinkMenu
        onClick={() => handleStateLink('MyAddVacancy')}
        statLink={statLink === 'MyAddVacancy' && true}
      >
        <TextRegular weight={600}>Adicionar Vagas</TextRegular>
      </LinkMenu>
    </ContainerMenu>
  )
}
