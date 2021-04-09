import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((id: string, amount: number) => void) => {
  function saveLocal(updatedItems: CartItem[]): void {
    window.localStorage.setItem('cart_products', JSON.stringify(updatedItems))
  }

  function updateById(items: CartItem[], id: string, amount: number): CartItem[] {
    const itemIndex = items.findIndex((cartItem) => cartItem.id === id)

    items[itemIndex].amount = amount

    return items
  }

  return (id: string, amount: number): void => {
    const items = cartItemsVar()
    const updatedItems = updateById(items, id, amount)

    cartItemsVar([...updatedItems])
    saveLocal(updatedItems)
  }
}
