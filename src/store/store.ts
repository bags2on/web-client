import { create } from 'zustand'
import type { CartItem } from './types'

type CartState = {
  cartAmount: () => number
  cartItems: CartItem[]
}

type CartActions = {
  addItem: (item: CartItem) => void
  clear: () => void
  remove: (id: string) => void
  updateAmount: (id: string, amount: number) => void
}

// const de = [
//   { productId: '1', amount: 1 },
//   { productId: '2', amount: 4 }
// ]

export const useCartStore = create<CartState & CartActions>((set, get) => ({
  cartItems: [],
  cartAmount: () => get().cartItems.reduce((acc, p) => acc + p.amount, 0),
  // cartPrice: () => get().cartItems.reduce((acc, p) => acc + p.price, 0),
  addItem: (newItem: CartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...newItem }]
    })),
  updateAmount: (id: string, amount: number) =>
    set((state) => {
      const cartItems = [...state.cartItems]

      const itemIndex = cartItems.findIndex((cartItem) => cartItem.productId === id)

      if (itemIndex >= 0) cartItems[itemIndex].amount = amount

      return {
        cartItems
      }
    }),
  remove: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.productId !== id)
    })),
  clear: () =>
    set(() => ({
      cartItems: []
    }))
}))
