import React from 'react'
import Summary from '../Summary/Summary'
import ResponsePlug from './ResponsePlug'
import ContentLoader from 'react-content-loader'
import CartItem, { CartItemType } from '../../CartItem/CartItem'
import { useQuery, useReactiveVar } from '@apollo/client'
import { CartMutations } from '../../../apollo/cache/mutations'
import {
  CartProductsDocument,
  CartProductsQuery,
  CartProductsVariables
} from '../../../graphql/product/_gen_/cartProducts.query'
import { cartItemsVar } from '../../../apollo/cache/variables'

import { Container, ProductsList, ClearButton, ContentLoaderList } from './CartItems.styled'

interface CartItemsProps {
  onClose(): void
  onCheckout(): void
}

const CartItems: React.FC<CartItemsProps> = ({ onClose, onCheckout }) => {
  const cartItems = useReactiveVar(cartItemsVar)

  const isCartEmpty = cartItems.length === 0

  const { data, loading, error } = useQuery<CartProductsQuery, CartProductsVariables>(CartProductsDocument, {
    variables: {
      input: cartItems
    },
    fetchPolicy: 'network-only',
    skip: isCartEmpty,
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

  if (isCartEmpty) {
    return <ResponsePlug text="Корзина пуста" onClose={onClose} />
  }

  if (error) {
    return <ResponsePlug text="Не удалось получить данные" onClose={onClose} />
  }

  const handleClearAllClick = (): void => {
    CartMutations.clearCart()
  }

  const handleProductRemove = (id: string): void => {
    CartMutations.removeProduct(id)
  }

  return (
    <Container>
      <Summary isLoading={loading} onClose={onClose} onCheckout={onCheckout} />

      {loading ? (
        <ContentLoaderList>
          {cartItems.map((_: unknown, index: number) => (
            <li key={index}>
              <ContentLoader
                backgroundColor="#F2E30C"
                foregroundColor="#ffd9a3"
                width="100%"
                height="210"
                viewBox="0 0 400 210"
              >
                <rect x="20" y="5" rx="6" ry="6" width="130" height="155" />
                <rect x="190" y="10" rx="0" ry="0" width="190" height="21" />
                <rect x="190" y="47" rx="0" ry="0" width="130" height="20" />
                <rect x="190" y="79" rx="0" ry="0" width="85" height="20" />
              </ContentLoader>
            </li>
          ))}
        </ContentLoaderList>
      ) : (
        <>
          <ClearButton onClick={handleClearAllClick} disableShadow>
            Очистить корзину
          </ClearButton>
          <ProductsList>
            {data?.cartProducts.map((product: CartItemType, index) => (
              <CartItem key={index} product={product} onRemove={handleProductRemove} />
            ))}
          </ProductsList>
        </>
      )}
    </Container>
  )
}

export default React.memo(CartItems)
