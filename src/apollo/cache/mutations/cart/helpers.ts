import { CartItem } from '../../types'

export function saveToLocalStorage(updatedItems: CartItem[]): void {
  window.localStorage.setItem('cart_products', JSON.stringify(updatedItems))
}
