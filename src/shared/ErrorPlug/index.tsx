import React from 'react'
import Image from 'next/image'

// import Asset_2 from '../../../public/assets/Asset_2.svg'

import { Container, ImageWrapper, Title, SubTitle } from './ErrorPlug.styled'

interface ErrorPlugProps {
  message?: string
}

const ErrorPlug: React.FC<ErrorPlugProps> = () => {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <Image width={200} height={100} src="/assets/Asset_2.svg" alt="asset 2" />
        </ImageWrapper>
        <Title>Не удалось получить данные с сервера</Title>
        <SubTitle>попробуйте перезагрузить страницу</SubTitle>
      </div>
    </Container>
  )
}

export default ErrorPlug
