import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((arg0: CartItem) => void) => {
  function saveLocal(updatedItems: CartItem[]): void {
    window.localStorage.setItem('cart_products', JSON.stringify(updatedItems))
  }

  function merege(items: CartItem[], newItem: CartItem): CartItem[] {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === newItem.id)

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
    saveLocal(updatedItems)
  }
}
