import React from 'react'
import { routeNames } from '@/utils/navigation'
import { useRouter } from 'next/router'
import CartItem, { CartItemType } from '@/components/Cart/CartItem/CartItem'
import { CartMutations } from '@/apollo/cache/mutations'
import TrashIcon from '../../../../../public/assets/icons/trash.svg'

import { Container, Title, ItemsList, ClearButton, TheTrashIcon } from './CartItems.styled'

interface CartItemsProps {
  cartItems: CartItemType[]
}

const CartItems: React.FC<CartItemsProps> = ({ cartItems }) => {
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
        <ClearButton onClick={handleClearAllClick} aria-label={`Удалить товар`}>
          {/* <Tooltip title="Удалить все"> */}
          <TheTrashIcon>
            <TrashIcon />
          </TheTrashIcon>
          {/* </Tooltip> */}
        </ClearButton>
      </Container>
      <ItemsList>
        {cartItems.map((product: CartItemType) => (
          <CartItem key={product.id} amount={1} product={product} onRemove={handleProductRemove} />
        ))}
      </ItemsList>
    </div>
  )
}

export default React.memo(CartItems)
