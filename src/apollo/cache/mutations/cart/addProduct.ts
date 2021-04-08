import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((arg0: CartItem) => void) => {
  // TODO: What if data with __typename?
  function saveLocal(updatedItems: CartItem[]): void {
    window.localStorage.setItem('cart_products', JSON.stringify(updatedItems))
  }

  function merege(items: CartItem[], newItem: CartItem): CartItem[] {
    const isExist = items.findIndex((cartItem) => cartItem.id === newItem.id)

    if (isExist === -1) {
      items.push(newItem)
    } else {
      items[isExist].amount += newItem.amount
    }

    return items
  }

  return (newItem: CartItem): void => {
    const items = cartItemsVar()
    const updatedItems = merege(items, newItem)

    cartItemsVar([...updatedItems])
    saveLocal(updatedItems)
  }
}
