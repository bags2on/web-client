import { InMemoryCache } from '@apollo/client'
import { favoriteProductsVar, isAuthenticatedVar, authModalVar } from './variables'

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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
