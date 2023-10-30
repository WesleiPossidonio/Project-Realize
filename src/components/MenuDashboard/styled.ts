import styled from 'styled-components'

interface ContainerMenuProps {
  stateMenu: boolean
}

export const ContainerMenu = styled.aside<ContainerMenuProps>`
  width: ${({ stateMenu }) => (stateMenu === true ? '18%' : '0')};

  display: ${({ stateMenu }) => stateMenu === false && 'none'};

  background-color: ${({ theme }) => theme.colors['bg-home']};
  padding-top: 3rem;
`

interface LinkMenuProps {
  statLink: boolean
}

export const LinkMenu = styled.div<LinkMenuProps>`
  width: 100%;
  height: 2rem;
  padding: 1.2rem 1.2rem 1.2rem 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-left: 3px solid
    ${({ theme, statLink }) => statLink && theme.colors['base-input']};

  opacity: ${({ statLink }) => statLink && '0.7'};
  cursor: pointer;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.colors['base-input']};
    opacity: 0.7;
  }
`
