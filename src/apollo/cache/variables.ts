import { makeVar } from '@apollo/client'

interface CartItem {
  productId: string
  amount: number
}

export const cartItemsVar = makeVar<CartItem[]>([])

export const cartPriceVar = makeVar<number>(0)
export const favoriteProductsVar = makeVar<string[]>([])

export const isAuthenticatedVar = makeVar<boolean>(false)
export const authModalVar = makeVar<boolean>(false)

export type { CartItem }
