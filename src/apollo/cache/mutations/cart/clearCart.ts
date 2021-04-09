import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): (() => void) => {
  return (): void => {
    cartItemsVar([])
    window.localStorage.setItem('cart_products', '[]')
  }
}
