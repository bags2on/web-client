import React from 'react'
import TrashIcon from '../../../../../../public/assets/icons/trash.svg'
import ListSkeleton from '@/components/Cart/CartItems/ListSkeleton'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'
import { CartMutations } from '@/apollo/cache/mutations'
import CartItem, { CartItemType } from '@/components/Cart/CartItem/CartItem'

import { Container, Title, ItemsList, ClearButton, TheTrashIcon } from './CartItems.styled'

interface CartItemsProps {
  cartCount: number
  cartProducts: CartItemType[]
  loading: boolean
}

const CartItems: React.FC<CartItemsProps> = ({ loading, cartProducts, cartCount }) => {
  const router = useRouter()

  const handleClearAllClick = (): void => {
    CartMutations.clearCart()
    router.replace(routeNames.root)
  }

  const handleProductRemove = (id: string): void => {
    CartMutations.removeProduct(id)
  }

  return (
    <div>
      <Container>
        <Title>Ваш заказ</Title>
        <ClearButton onClick={handleClearAllClick}>
          <TheTrashIcon>
            <TrashIcon />
          </TheTrashIcon>
        </ClearButton>
      </Container>
      {loading ? (
        <ListSkeleton max={3} itemsAmount={cartCount} />
      ) : (
        <ItemsList>
          {cartProducts.map((product: CartItemType) => (
            <CartItem
              key={product.id}
              amount={1}
              product={product}
              onRemove={handleProductRemove}
            />
          ))}
        </ItemsList>
      )}
    </div>
  )
}

export default CartItems
