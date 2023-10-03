import React from 'react'
import Skeleton from './Skeleton'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '../../../apollo/cache/variables'
import { formatPrice } from '@/utils/helper'

import { Container, InnerContainer, CartPrice, OrderButton } from './Summary.styled'

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
    return <Skeleton />
  }

  return (
    <Container>
      <InnerContainer>
        <CartPrice>
          <span>Итого:</span>
          <b>{formatPrice(cartPrice)}&nbsp;грн.</b>
        </CartPrice>
        <OrderButton fullWidth color="secondary" onClick={handleButtonClick}>
          Оформить заказ
        </OrderButton>
      </InnerContainer>
    </Container>
  )
}

export default Summary
