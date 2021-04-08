import { InMemoryCache, makeVar } from '@apollo/client'

interface CartItem {
  id: string
  amount: number
}

export const cartItemsVar = makeVar<CartItem[]>([])

// TODO: __typename???
const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    cartItems: {
      keyFields: [],
      queryType: true,
      fields: {
        cartItems: {
          read(): CartItem[] {
            return cartItemsVar()
          }
        }
      }
    }
    // Query: {
    //   fields: {
    //     cartItems: {
    //       read(): CartItem[] {
    //         return cartItemsVar()
    //       }
    //     }
    //   }
    // }
  }
})

export { cache }
