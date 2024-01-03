import React from 'react'
import clsx from 'clsx'
import CartItem from '@/components/CartItem'
import IconButton from '@/shared/IconButton'
import TrashIcon from '../../../../../../public/assets/icons/trash.svg'
import ListSkeleton from '@/components/Cart/CartItems/ListSkeleton'
import { useCartStore } from '@/store/store'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import type { cartItem } from '@/types'

import styles from './CartItems.module.scss'

interface CartItemsProps {
  cartCount: number
  cartProducts: cartItem[]
  loading: boolean
}

const CartItems: React.FC<CartItemsProps> = ({ loading, cartProducts, cartCount }) => {
  const router = useRouter()

  const clearCart = useCartStore((state) => state.clear)
  const removeCartItem = useCartStore((state) => state.remove)

  const handleClearAllClick = (): void => {
    clearCart()
    router.replace(routeNames.root)
  }

  const handleProductRemove = (id: string): void => {
    removeCartItem(id)
  }

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.title}>Ваш заказ</h2>
        <IconButton className={styles.clearButton} onClick={handleClearAllClick}>
          <div className={clsx('svg-icon', styles.trashIcon)}>
            <TrashIcon />
          </div>
        </IconButton>
      </div>
      {loading ? (
        <ListSkeleton max={3} itemsAmount={cartCount} />
      ) : (
        <ul className={styles.list}>
          {cartProducts.map((product) => (
            <CartItem
              key={product.id}
              amount={1}
              product={product}
              onRemove={handleProductRemove}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartItems
