import React from 'react'
import history from '../../../utils/history'
import routes from '../../../utils/routes'
import CartItem, { CartItemType } from '../../../components/Cart/CartItem/CartItem'
import { CartMutations } from '../../../apollo/cache/mutations'
import { ReactComponent as TrashIcon } from '../../../assets/svg/icons/trash.svg'

import { Container, Title, ItemsList, ClearButton, TheTrashIcon } from './CartItems.styled'

interface CartItemsProps {
  cartItems: CartItemType[]
}

const CartItems: React.FC<CartItemsProps> = ({ cartItems }) => {
  const handleClearAllClick = (): void => {
    CartMutations.clearCart()
    history.replace(routes.root)
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
          <CartItem key={product.id} product={product} onRemove={handleProductRemove} />
        ))}
      </ItemsList>
    </div>
  )
}

export default React.memo(CartItems)
