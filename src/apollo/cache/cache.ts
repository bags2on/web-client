import { InMemoryCache } from '@apollo/client'
import { cartItemsVar, cartPriceVar, favoriteProductsVar, isAuthenticatedVar, authModalVar } from './variables'
import type { CartItem } from './variables'

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read(): CartItem[] {
            return cartItemsVar()
          }
        },
        cartAmount: {
          read(_, opt): number {
            const res = opt.readField<CartItem[]>('cartItems')
            if (!res?.length) return 0
            return res?.reduce((acc, p) => acc + p.amount, 0)
          }
        },
        cartPrice: {
          read(): number {
            return cartPriceVar()
          }
        },
        favoriteProducts: {
          read(): string[] {
            return favoriteProductsVar()
          }
        },
        favoriteAmount: {
          read(): number {
            return favoriteProductsVar().length
          }
        },
        isAuthenticated: {
          read(): boolean {
            return isAuthenticatedVar()
          }
        },
        isAuthModalOpen: {
          read(): boolean {
            return authModalVar()
          }
        }
      }
    }
  }
})

export { cache }
