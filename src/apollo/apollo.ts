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
