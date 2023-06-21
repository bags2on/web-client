import { ReactiveVar } from '@apollo/client'
import { CartItem } from '../../types'

export default (cartItemsVar: ReactiveVar<CartItem[]>): (() => void) => {
  return (): void => {
    cartItemsVar([])
    window.localStorage.setItem('cart_products', '[]')
  }
}
