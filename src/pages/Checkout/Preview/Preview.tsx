import React from 'react'
import CartItems from './CartItems'
import Summary from './Summary'
import ScaleLoader from '../../../shared/loaders/ScaleLoader'
import SignupPromo from '../../../components/SignupPromo'
import { useQuery, useReactiveVar } from '@apollo/client'
import { cartItemsVar } from '../../../apollo/cache/variables'
import { CartMutations } from '../../../apollo/cache/mutations'
import {
  CartProductsDocument,
  CartProductsQuery,
  CartProductsVariables
} from '../../../graphql/product/_gen_/cartProducts.query'
import type { CartItemType } from '../../../components/Cart/CartItem/CartItem'

import { Container, Wrapper, LoaderWrapper } from './Preview.styled'

interface PreviewProps {
  submitLoading: boolean
  orderCreationErr: boolean
}

const Preview: React.FC<PreviewProps> = ({ submitLoading, orderCreationErr }) => {
  const cartItems = useReactiveVar(cartItemsVar)

  const { data, loading, error } = useQuery<CartProductsQuery, CartProductsVariables>(CartProductsDocument, {
    variables: {
      input: cartItems
    },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data) {
        const totalSumm = data.cartProducts.reduce(
          (previousValue: number, item: CartItemType) => previousValue + item.currentPrice * item.amount,
          0
        )

        CartMutations.updateCartPrice(totalSumm)
      }
    }
  })

  if (loading) {
    return (
      <LoaderWrapper>
        <ScaleLoader fallback />
      </LoaderWrapper>
    )
  }

  if (error) {
    // TODO: handle error
    return <h1>Error</h1>
  }

  return (
    <Container>
      <Wrapper>
        <CartItems cartItems={data?.cartProducts || []} />
        <Summary submitLoading={submitLoading} orderCreationErr={orderCreationErr} />
      </Wrapper>
      <SignupPromo />
    </Container>
  )
}

export default Preview
