import React from 'react'
import CrossIcon from '../../../../public/assets/cross.svg'
import TrashIcon from '../../../../public/assets/trash.svg'
import { CartMutations } from '@/apollo/cache/mutations'

import {
  Container,
  ClearButton,
  CloseButton,
  TheTrashIcon,
  TheCloseIcon,
  InnerContainer,
  Title
} from './TopControls.styled'

interface TopControlsProps {
  onCartClose(): void
}

const TopControls: React.FC<TopControlsProps> = ({ onCartClose }) => {
  const handleClearButtonClick = (): void => {
    CartMutations.clearCart()
  }

  return (
    <Container>
      <InnerContainer>
        <CloseButton disableRipple onClick={onCartClose}>
          <TheCloseIcon>
            <CrossIcon />
          </TheCloseIcon>
        </CloseButton>
        <Title>
          <b>Ваши</b>&nbsp;товары
        </Title>
        <ClearButton
          color="danger"
          onClick={handleClearButtonClick}
          startIcon={
            <TheTrashIcon>
              <TrashIcon />
            </TheTrashIcon>
          }
        >
          Очистить
        </ClearButton>
      </InnerContainer>
    </Container>
  )
}

export default TopControls
