import { InMemoryCache, makeVar } from '@apollo/client'
import { GET_CART_ITEMS } from './queries/cart'

interface CartItem {
  id: string
  amount: number
}

const cartItemsVar = makeVar<CartItem[]>([
  // {
  //   id: '12123',
  //   amount: 1
  // }
])

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    // cartItems: {
    //   keyFields: [],
    //   queryType: true,
    //   fields: {
    //     id: {},
    //     amount: {}
    //   }
    // }
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

cache.writeQuery({
  query: GET_CART_ITEMS,
  data: {
    cartItems: cartItemsVar()
  }
})

export { cache }
