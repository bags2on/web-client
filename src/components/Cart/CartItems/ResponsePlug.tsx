import React from 'react'
import { ReactComponent as EmptyCartIcon } from '../../../assets/svg/emptycart.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/svg/icons/expand-arrow.svg'

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
