import React from 'react'
import Summary from '../Summary/Summary'
import ProcessPlug from '../Plugs/ProcessPlug/ProcessPlug'
import ListSkeleton from './ListSkeleton'
import TopControls from '../TopControls/TopControls'
import CartItem, { CartItemType } from '../CartItem/CartItem'
import { useReactiveVar } from '@apollo/client'
import { CartMutations } from '../../../apollo/cache/mutations'
import { useCartProductsQuery } from '../../../graphql/product/_gen_/cartProducts.query'
import { cartItemsVar } from '../../../apollo/cache/variables'

import { Container, ProductsList } from './CartItems.styled'

interface CartItemsProps {
  onClose(): void
  onCheckout(): void
}

const CartItems: React.FC<CartItemsProps> = ({ onClose, onCheckout }) => {
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

  const isCartEmpty = cartItems.length === 0

  const { data, error, loading } = useCartProductsQuery({
    variables: {
      input: cartItems
    },
    fetchPolicy: 'network-only',
    skip: isCartEmpty,
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
  })

  if (isCartEmpty) {
    return <ProcessPlug text="Корзина пуста" onClose={onClose} />
  }

  if (error) {
    return <ProcessPlug text="Не удалось получить данные" onClose={onClose} />
  }

  const handleProductRemove = (id: string): void => {
    CartMutations.removeProduct(id)
  }

  return (
    <Container>
      <TopControls onCartClose={onClose} />
      {loading ? (
        <ListSkeleton itemsAmount={cartItems.length} />
      ) : (
        <ProductsList>
          {data?.cartProducts.map((product: CartItemType, index) => (
            <li key={index}>
              <CartItem
                amount={normalizedCart[product.id]}
                product={product}
                onRemove={handleProductRemove}
              />
            </li>
          ))}
        </ProductsList>
      )}
      <Summary isLoading={loading} onCheckout={onCheckout} />
    </Container>
  )
}

export default React.memo(CartItems)
