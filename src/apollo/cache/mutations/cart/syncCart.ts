import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): (() => void) => {
  return (): void => {
    const data = JSON.parse(window.localStorage.getItem('cart_products') || '[]')
    cartItemsVar([...data])
  }
}
