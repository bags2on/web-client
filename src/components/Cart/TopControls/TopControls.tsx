import React from 'react'
import CrossIcon from '../../../../public/assets/icons/cross.svg'
import TrashIcon from '../../../../public/assets/icons/trash.svg'
import { useTranslation } from 'next-i18next'
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
  const { t } = useTranslation()

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
          <b>{t('cart.topControls.title1')}</b>&nbsp;{t('cart.topControls.title2')}
        </Title>
        <ClearButton
          color="secondary"
          onClick={handleClearButtonClick}
          startIcon={
            <TheTrashIcon>
              <TrashIcon />
            </TheTrashIcon>
          }
        >
          {t('cart.topControls.action')}
        </ClearButton>
      </InnerContainer>
    </Container>
  )
}

export default TopControls
