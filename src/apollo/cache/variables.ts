import { makeVar } from '@apollo/client'
import type { CartItem } from './types'

export const cartItemsVar = makeVar<CartItem[]>([])
export const cartPriceVar = makeVar<number>(0)

export const favoriteProductsVar = makeVar<string[]>([])

export const isAuthenticatedVar = makeVar<boolean>(false)
export const authModalVar = makeVar<boolean>(false)
