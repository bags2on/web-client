import React from 'react'
import Button from '@/shared/Button'
import ContentLoader from 'react-content-loader'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '../../../apollo/cache/variables'
import { formatPrice } from '@/utils/helper'

import { Container, InnerContainer, CartPrice } from './Summary.styled'

interface SummaryProps {
  isLoading: boolean
  onCheckout(): void
}

const Summary: React.FC<SummaryProps> = ({ isLoading, onCheckout }) => {
  const cartPrice = useReactiveVar(cartPriceVar)

  const handleButtonClick = (): void => {
    onCheckout()
  }

  if (isLoading) {
    return (
      <Container>
        <ContentLoader
          backgroundColor="#F2E30C"
          foregroundColor="#ffd9a3"
          width="100%"
          height="79px"
        >
          <rect x="0" y="15" rx="4" ry="4" width="80" height="25" />
          <rect x="60%" y="12" rx="4" ry="4" width="142" height="25" />
          <rect x="0" y="57" rx="8" ry="8" width="100%" height="44" />
        </ContentLoader>
      </Container>
    )
  }

  return (
    <Container>
      <InnerContainer>
        <CartPrice>
          <span>Итого:</span>
          <b>{formatPrice(cartPrice)}&nbsp;грн.</b>
        </CartPrice>
        <Button fullWidth color="secondary" onClick={handleButtonClick}>
          Оформить заказ
        </Button>
      </InnerContainer>
    </Container>
  )
}

export default Summary
