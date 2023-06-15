import React from 'react'
import EmptyCartIcon from '../../../../public/assets/emptycart.svg'
import ArrowIcon from '../../../../public/assets/expand-arrow.svg'

import { Container, Content, BackButton, ExpandIcon } from './ResponsePlug.styled'

interface ResponsePlugProps {
  text: string
  onClose(): void
}

const ResponsePlug: React.FC<ResponsePlugProps> = ({ text, onClose }) => {
  return (
    <Container>
      <Content>
        <EmptyCartIcon />
        <p>{text}</p>
      </Content>
      <BackButton
        fullWidth
        onClick={onClose}
        color="secondary"
        startIcon={
          <ExpandIcon>
            <ArrowIcon />
          </ExpandIcon>
        }
      >
        Назад
      </BackButton>
    </Container>
  )
}

export default ResponsePlug
