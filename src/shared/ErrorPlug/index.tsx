import React from 'react'
import Asset_2 from '../../assets/svg/Asset_2.svg'

import { Container, ImageWrapper, Title, SubTitle } from './ErrorPlug.styled'

interface ErrorPlugProps {
  message?: string
}

const ErrorPlug: React.FC<ErrorPlugProps> = () => {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <img src={Asset_2} alt="asset 2" />
        </ImageWrapper>
        <Title>Не удалось получить данные с сервера</Title>
        <SubTitle>попробуйте перезагрузить страницу</SubTitle>
      </div>
    </Container>
  )
}

export default ErrorPlug
