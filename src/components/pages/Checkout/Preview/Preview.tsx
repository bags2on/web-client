import React from 'react'
import CartItems from './CartItems'
import Summary from './Summary'
import SignupPromo from './SignupPromo'
import { useQuery, useReactiveVar } from '@apollo/client'
import { cartItemsVar } from '@/apollo/cache/variables'
import { CartMutations } from '@/apollo/cache/mutations'
import {
  CartProductsDocument,
  CartProductsQuery,
  CartProductsQueryVariables
} from '@/graphql/product/_gen_/cartProducts.query'
import type { CartItemType } from '@/components/Cart/CartItem/CartItem'

import { Container, Wrapper } from './Preview.styled'

interface PreviewProps {
  submitLoading: boolean
  orderCreationErr: boolean
}

const Preview: React.FC<PreviewProps> = ({ submitLoading, orderCreationErr }) => {
  const cartItems = useReactiveVar(cartItemsVar)

  const cartMap: Record<string, number> = {}

  const normalizedCart = cartItems.reduce((acc, item) => {
    if (acc[item.productId]) {
      acc[item.productId] = acc[item.productId] += item.amount
      return acc
    }

    acc[item.productId] = item.amount
    return acc
  }, cartMap)

  const { data, loading, error } = useQuery<CartProductsQuery, CartProductsQueryVariables>(
    CartProductsDocument,
    {
      variables: {
        input: cartItems
      },
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
      onCompleted: (data) => {
        if (data) {
          const totalSumm = data.cartProducts.reduce(
            (previousValue: number, item: CartItemType) =>
              previousValue + item.currentPrice * normalizedCart[item.id],
            0
          )

          CartMutations.updateCartPrice(totalSumm)
        }
      }
    }
  )

  if (error) {
    // TODO: handle error
    return <h1>Error</h1>
  }

  return (
    <Container>
      <Wrapper>
        <CartItems
          loading={loading}
          cartCount={cartItems.length}
          cartProducts={data?.cartProducts || []}
        />
        <Summary
          loading={loading}
          submitLoading={submitLoading}
          orderCreationErr={orderCreationErr}
        />
      </Wrapper>
      <SignupPromo />
    </Container>
  )
}

export default Preview
