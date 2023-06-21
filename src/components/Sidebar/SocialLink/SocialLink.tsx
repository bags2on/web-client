import React from 'react'
import { Container, Title, IconBox, TheTelegramIcon } from './SocialLink.styled'
import TelegramIcon from '../../../../public/assets/telegram.svg'

const SocialLink: React.FC = () => {
  return (
    <Container href={'https://t.me/' + process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}>
      <Title>
        Мы в <b>Telegram</b>
      </Title>
      <IconBox>
        <TheTelegramIcon>
          <TelegramIcon />
        </TheTelegramIcon>
      </IconBox>
    </Container>
  )
}

export default SocialLink
