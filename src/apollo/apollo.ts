import ApolloClient, { gql } from 'apollo-boost'
import { cache } from './cache'

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:8080/',
  resolvers: {
    Mutation: {
      addtoCart: (_root, args, { cache }): void => {
        const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS })
        const newCartItems = [...cartItems, args.id]
        client.writeData({ data: { cartItems: newCartItems } })
      }
    },
    Query: {
      cartTotals: (_root, args, { cache }): number => {
        const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS })
        return cartItems.length
      }
    }
  }
})

export default client
