import { InMemoryCache, makeVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export const cartItemsVar = makeVar<CartItem[]>([])
export const cartPriceVar = makeVar<number>(0)

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
          read(_, options): number {
            const res = options.readField<CartItem[]>('cartItems')
            if (!res?.length) return 0
            return res?.reduce((acc, p) => acc + p.amount, 0)
          }
        },
        cartPrice: {
          read(): number {
            return cartPriceVar()
          }
        }
      }
    }
  }
})

export { cache }
