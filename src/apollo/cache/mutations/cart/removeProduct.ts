import { ReactiveVar } from '@apollo/client'
import { CartItem } from '../../types'
import { saveToLocalStorage } from './helpers'

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((id: string) => void) => {
  function filter(items: CartItem[], id: string): CartItem[] {
    return items.filter((cartItem) => cartItem.productId !== id)
  }

  return (id: string): void => {
    const items = cartItemsVar()
    const updatedItems = filter(items, id)

    cartItemsVar([...updatedItems])
    saveToLocalStorage(updatedItems)
  }
}
