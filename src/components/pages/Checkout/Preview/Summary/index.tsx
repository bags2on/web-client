import React from 'react'
import Button from '@/shared/Button'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '@/apollo/cache/variables'
import { formatPrice } from '@/utils/helper'
import { Container, Info, TotalInfo, ConditionsInfo, MakeOrderErr } from './Summary.styled'
interface SummaryProps {
  submitLoading: boolean
  orderCreationErr: boolean
}

const Summary: React.FC<SummaryProps> = ({ submitLoading, orderCreationErr }) => {
  const cartPrice = useReactiveVar(cartPriceVar)

  return (
    <Container>
      <Info>
        <TotalInfo>
          <b>Итого:</b>
          <span>{formatPrice(cartPrice)}&nbsp;грн.</span>
        </TotalInfo>
      </Info>
      <Button fullWidth color="secondary" type="submit" loading={submitLoading}>
        Подтвердить заказ
      </Button>
      {orderCreationErr && (
        <MakeOrderErr>
          <b>Внимание!</b>
          <p>Произошла ошибка, повторите попытку позже</p>
        </MakeOrderErr>
      )}
      <ConditionsInfo>
        <p>Подтверждая заказ, я принимаю условия пользовательского соглашения</p>
      </ConditionsInfo>
    </Container>
  )
}

export default Summary
