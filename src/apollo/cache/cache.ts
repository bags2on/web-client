import { InMemoryCache, makeVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export const cartItemsVar = makeVar<CartItem[]>([])
export const cartPriceVar = makeVar<number>(0)

// TODO: set __typename???

/*
  [FIELD]: {
    keyFields: [],
    queryType: true,
    fields: {
      [FIELD]: {
        read(): CartItem[] {
          return cartItemsVar()
        }
      }
    }
  }
*/

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read(): CartItem[] {
            return cartItemsVar()
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
