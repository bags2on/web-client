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
      syncCartWithLocalStorage: (_root, _, { cache }): void => {
        const ids = window.localStorage.getItem('cartIDs')
        if (!ids) return
        client.writeData({ data: { cartItems: JSON.parse(ids) } })
      },
      addToCart: (_root, args, { cache }): void => {
        const res = window.localStorage.getItem('cartIDs')
        console.log(res)
        const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS })
        const newCartItems = [...cartItems, args.id]
        window.localStorage.setItem('cartIDs', JSON.stringify(newCartItems))
        client.writeData({ data: { cartItems: newCartItems } })
      },
      removeFromCart: (_root, args, { cache }): void => {},
      clearCart: (_root, args, { cache }): void => {
        client.writeData({ data: { cartItems: [] } })
        const savedItems = window.localStorage.getItem('cartIDs')
        if (savedItems) {
          window.localStorage.setItem('cartIDs', JSON.stringify([]))
        }
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