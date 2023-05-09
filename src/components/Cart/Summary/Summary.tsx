import React from 'react'
import Button from '../../../shared/Button/Button'
import ContentLoader from 'react-content-loader'
import { ReactComponent as CrossIcon } from '../../../assets/svg/icons/cross.svg'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '../../../apollo/cache/variables'
import { formatPrice } from '../../../utils/helpers'

import { CloseButton, Container, InnerContainer, TheCloseIcon, Wrapper, CartPrice } from './Summary.styled'

interface SummaryProps {
  isLoading: boolean
  onClose(): void
  onCheckout(): void
}

const Summary: React.FC<SummaryProps> = ({ isLoading, onClose, onCheckout }) => {
  const cartPrice = useReactiveVar(cartPriceVar)

  const handleCheckoutClick = (): void => {
    console.log('order')
    onCheckout()
  }

  if (isLoading) {
    return (
      <Container>
        <CloseButton $loading={isLoading} onClick={onClose} disableRipple>
          <TheCloseIcon>
            <CrossIcon />
          </TheCloseIcon>
        </CloseButton>
        <ContentLoader backgroundColor="#F2E30C" foregroundColor="#ffd9a3" width="100%" height="102">
          <rect x="70" y="12" rx="4" ry="4" width="142" height="25" />
          <rect x="0" y="57" rx="8" ry="8" width="100%" height="44" />
        </ContentLoader>
      </Container>
    )
  }

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          <CloseButton disableRipple onClick={onClose}>
            <TheCloseIcon>
              <CrossIcon />
            </TheCloseIcon>
          </CloseButton>
          <CartPrice>
            Итого:&nbsp;
            <span>{formatPrice(cartPrice)}&nbsp;грн.</span>
          </CartPrice>
        </Wrapper>
        <Button fullWidth disableShadow color="secondary" onClick={handleCheckoutClick}>
          Оформить заказ
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default Summary
