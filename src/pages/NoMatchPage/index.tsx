import React from 'react'
import history from '../../utils/history'
import routes from '../../utils/routes'
import NotFoundImage from '../../assets/svg/404.svg'

import { Container, Inner, ImageBox, Title, ActionButton } from './NoMatchPage.styled'

const NoMatchPage: React.FC = () => {
  const handleButtonClick = () => {
    history.push(routes.root)
  }

  return (
    <Container>
      <Inner>
        <ImageBox>
          <img src={NotFoundImage} alt="Страница не найдена (изображение)" />
        </ImageBox>
        <Title>Страница не найдена</Title>
        <ActionButton color="secondary" fullWidth onClick={handleButtonClick}>
          На главную
        </ActionButton>
      </Inner>
    </Container>
  )
}

export default NoMatchPage
