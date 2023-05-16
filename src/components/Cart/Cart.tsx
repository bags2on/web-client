import React from 'react'
import Drawer from '../../shared/Drawer'
import CartItems from './CartItems/CartItems'
import history from '../../utils/history'
import routes from '../../utils/routes'

import { Container } from './Cart.styled'

interface CartProps {
  isOpen: boolean
  onClose(): void
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const handleCheckout = (): void => {
    onClose()
    history.push(routes.checkout)
  }

  return (
    <Drawer position="right" onClose={onClose} open={isOpen}>
      <Container>{isOpen && <CartItems key={1} onClose={onClose} onCheckout={handleCheckout} />}</Container>
    </Drawer>
  )
}

export default Cart
