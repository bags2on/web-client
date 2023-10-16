import React from 'react'
import Drawer from '@/shared/Drawer'
import CartItems from './CartItems/CartItems'

import { Container } from './Cart.styled'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'

interface CartProps {
  isOpen: boolean
  onClose(): void
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const router = useRouter()

  const handleCheckout = (): void => {
    onClose()
    router.push(routeNames.checkout)
  }

  return (
    <Drawer position="right" onClose={onClose} open={isOpen}>
      <Container>
        {isOpen && <CartItems key={1} onClose={onClose} onCheckout={handleCheckout} />}
      </Container>
    </Drawer>
  )
}

export default Cart
