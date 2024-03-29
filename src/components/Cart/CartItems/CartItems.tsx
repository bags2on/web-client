import React, { memo } from 'react'
import { Summary } from '../Summary/Summary'
import { ProcessPlug } from '../Plugs/ProcessPlug/ProcessPlug'
import { ListSkeleton } from './ListSkeleton'
import { TopControls } from '../TopControls/TopControls'
import { CartItem, CartItemType } from '@/components/CartItem'
import { useTranslation } from 'next-i18next'
import { useCartStore } from '@/store/cart'
import { useCartProductsQuery } from '../../../graphql/product/_gen_/cartProducts.query'

import styles from './CartItems.module.scss'

interface CartItemsProps {
  onClose(): void
  onCheckout(): void
}

export const CartItems = memo(function CartItems({ onClose, onCheckout }: CartItemsProps) {
  const cartItems = useCartStore((state) => state.cartItems)
  const removeCartItem = useCartStore((state) => state.remove)
  const setCartPrice = useCartStore((state) => state.setCartPrice)
  const { t } = useTranslation()

  // TODO: put this logic into state elements
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

        setCartPrice(totalSumm)
      }
    }
  })

  if (isCartEmpty) {
    return <ProcessPlug text={t('cart.emptyMsg')} onClose={onClose} />
  }

  if (error) {
    return <ProcessPlug text={t('cart.errorMsg')} onClose={onClose} />
  }

  const handleProductRemove = (id: string): void => {
    removeCartItem(id)
  }

  return (
    <div className={styles.container}>
      <TopControls onCartClose={onClose} />
      {loading ? (
        <ListSkeleton itemsAmount={cartItems.length} />
      ) : (
        <ul className={styles.list}>
          {data?.cartProducts.map((product: CartItemType) => (
            <CartItem
              key={product.id}
              amount={normalizedCart[product.id]}
              product={product}
              onRemove={handleProductRemove}
            />
          ))}
        </ul>
      )}
      <Summary isLoading={loading} onCheckout={onCheckout} />
    </div>
  )
})
