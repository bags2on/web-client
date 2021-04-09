import { ReactiveVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export default (cartItemsVar: ReactiveVar<CartItem[]>): ((id: string) => void) => {
  // TODO: What if data with __typename?
  function saveLocal(updatedItems: CartItem[]): void {
    window.localStorage.setItem('cart_products', JSON.stringify(updatedItems))
  }

  function filter(items: CartItem[], id: string): CartItem[] {
    return items.filter((cartItem) => cartItem.id !== id)
  }

  return (id: string): void => {
    const items = cartItemsVar()
    const updatedItems = filter(items, id)

    cartItemsVar([...updatedItems])
    saveLocal(updatedItems)
  }
}
