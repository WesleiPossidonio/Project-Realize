import styled from 'styled-components'

import ImageBanner from '../../../../assets/Banner.jpg'

export const ContainerSection = styled.div`
  width: 100%;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 4.5rem;

  background-image: url(${ImageBanner});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
export const ContainerText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  margin-top: 1rem;
`

export const InputSearch = styled.input`
  width: 23rem;
  height: 3rem;

  padding: 1rem;
  border: none;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-m']};
  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-secundary']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-input']};
  }
`

export const Button = styled.button`
  width: 6rem;
  height: 3rem;

  border: none;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSizes['text-regular-m']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-input']};

  background-color: ${({ theme }) => theme.colors['bg-home']};

  cursor: pointer;
`
