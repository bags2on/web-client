import { ReactiveVar } from '@apollo/client'
import { CartItem } from '../../types'
import { saveToLocalStorage } from './helpers'

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((id: string, amount: number) => void) => {
  function updateById(items: CartItem[], id: string, amount: number): CartItem[] {
    const itemIndex = items.findIndex((cartItem) => cartItem.productId === id)

    items[itemIndex].amount = amount

    return items
  }

  return (id: string, amount: number): void => {
    const items = cartItemsVar()
    const updatedItems = updateById(items, id, amount)

    cartItemsVar([...updatedItems])
    saveToLocalStorage(updatedItems)
  }
}
