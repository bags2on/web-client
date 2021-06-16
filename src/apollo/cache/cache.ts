import { InMemoryCache, makeVar } from '@apollo/client'

export const cartItemsVar = makeVar<CartItem[]>([])
export const cartPriceVar = makeVar<number>(0)
export const favoriteAmountVar = makeVar<string[]>([])

export const isAuthenticatedVar = makeVar<boolean>(true)
export const authModalVar = makeVar<boolean>(false)

interface CartItem {
  id: string
  amount: number
}

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
        favoriteIds: {
          read(): string[] {
            return favoriteAmountVar()
          }
        },
        favoriteAmount: {
          read(_, opt): number {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return opt.readField<string[]>('favoriteIds')!.length
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
