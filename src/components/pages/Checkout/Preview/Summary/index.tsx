import React from 'react'
import Button from '@/shared/Button'
import { useReactiveVar } from '@apollo/client'
import { cartPriceVar } from '@/apollo/cache/variables'
import { formatPrice } from '@/utils/helper'
import { Container, Info, TotalInfo, ConditionsInfo, MakeOrderErr } from './Summary.styled'
import ContentLoader from 'react-content-loader'
interface SummaryProps {
  loading: boolean
  submitLoading: boolean
  orderCreationErr: boolean
}

const Summary: React.FC<SummaryProps> = ({ loading, submitLoading, orderCreationErr }) => {
  const cartPrice = useReactiveVar(cartPriceVar)

  return (
    <Container>
      <Info>
        {loading ? (
          <ContentLoader
            backgroundColor="#eeeeee"
            foregroundColor="#e1e1e1"
            width="100%"
            height="29"
            viewBox="0 0 450 29"
          >
            <rect x="0" y="0" rx="6" ry="6" width="80" height="27" />
            <rect x="71%" y="0" rx="6" ry="6" width="120" height="27" />
          </ContentLoader>
        ) : (
          <TotalInfo>
            <b>Итого:</b>
            <span>{formatPrice(cartPrice)}&nbsp;грн.</span>
          </TotalInfo>
        )}
      </Info>
      <Button
        fullWidth
        color="secondary"
        type="submit"
        loading={submitLoading || loading}
        disabled={submitLoading || loading}
      >
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
