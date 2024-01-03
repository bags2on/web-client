import { makeVar } from '@apollo/client'

export const cartPriceVar = makeVar<number>(0)

export const favoriteProductsVar = makeVar<string[]>([])

export const isAuthenticatedVar = makeVar<boolean>(false)
export const authModalVar = makeVar<boolean>(false)
