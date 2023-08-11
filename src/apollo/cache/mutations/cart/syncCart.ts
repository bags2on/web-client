import { ReactiveVar } from '@apollo/client'
import clearCart from './clearCart'
import { CartItem } from '../../types'

export default (cartItemsVar: ReactiveVar<CartItem[]>): (() => void) => {
  return (): void => {
    try {
      const data = JSON.parse(window.localStorage.getItem('cart_products') || '[]')
      cartItemsVar([...data])
    } catch (error) {
      // TODO: find better solution
      clearCart(cartItemsVar)()
    }
  }
}
