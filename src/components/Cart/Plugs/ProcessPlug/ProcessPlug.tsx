import React from 'react'
import EmptyCartIcon from '../../../../../public/assets/emptycart.svg'
import ArrowIcon from '../../../../../public/assets/icons/expand-arrow.svg'

import { Container, Content, BackButton, ExpandIcon } from './ProcessPlug.styled'

interface ProcessPlugProps {
  text: string
  onClose(): void
}

const ProcessPlug: React.FC<ProcessPlugProps> = ({ text, onClose }) => {
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

export default ProcessPlug
