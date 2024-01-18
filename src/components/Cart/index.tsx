import React from 'react'
import { Drawer } from '@/shared/Drawer'
import { CartItems } from './CartItems/CartItems'
import { useRouter } from 'next/router'
import { routeNames } from '@/utils/navigation'

import styles from './Cart.module.scss'

interface CartProps {
  isOpen: boolean
  onClose(): void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const router = useRouter()

  const handleCheckout = (): void => {
    onClose()
    router.push(routeNames.checkout)
  }

  return (
    <Drawer position="right" onClose={onClose} open={isOpen}>
      <div className={styles.container}>
        {isOpen && <CartItems key={1} onClose={onClose} onCheckout={handleCheckout} />}
      </div>
    </Drawer>
  )
}
