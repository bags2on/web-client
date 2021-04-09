import { ApolloClient } from '@apollo/client'
import { GET_CART_ITEMS } from './cache/queries/cart'
import { cache } from './cache/cache'

const API_URL = process.env.REACT_APP_API_URL
const withDevTools = process.env.NODE_ENV === 'development'

const client = new ApolloClient({
  cache,
  uri: API_URL,
  connectToDevTools: withDevTools,
  resolvers: {
    Mutation: {
      removeFromCart: (_root, args, { cache }): void => {
        const productIds = window.localStorage.getItem('cartIDs')

        const filterItems = (arr: string[]): string[] => {
          return arr.filter((productId: string): boolean => productId !== args.id)
        }

        if (productIds) {
          const parsedIds: string[] = JSON.parse(productIds)
          const res = filterItems(parsedIds)
          window.localStorage.setItem('cartIDs', JSON.stringify(res))
        }

        const { cartIDs } = cache.readQuery({ query: GET_CART_ITEMS })

        const updatedItems = filterItems(cartIDs)
        // client.writeData({ data: { cartIDs: updatedItems } })
      },
      updateCartTotalPrice: (_root, args, { cache }): void => {
        console.log(args)
        // client.writeData({ data: { cartTotalPrice: args.input } })
      }
    },
    Query: {
      cartTotals: (_root, args, { cache }): number => {
        const { cartIDs } = cache.readQuery({ query: GET_CART_ITEMS })
        return cartIDs.length
      }
    }
  }
})

export default client
