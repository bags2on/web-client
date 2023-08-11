import { ReactiveVar } from '@apollo/client'
import { CartItem } from '../../types'
import { saveToLocalStorage } from './helpers'

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((arg0: CartItem) => void) => {
  function merege(items: CartItem[], newItem: CartItem): CartItem[] {
    const itemIndex = items.findIndex((cartItem) => cartItem.productId === newItem.productId)

    if (itemIndex === -1) {
      items.push({ ...newItem })
    } else {
      items[itemIndex].amount += newItem.amount
    }

    return items
  }

  return (newItem: CartItem): void => {
    const items = cartItemsVar()
    const updatedItems = merege(items, newItem)

    cartItemsVar([...updatedItems])
    saveToLocalStorage(updatedItems)
  }
}
