import ApolloClient from 'apollo-boost'
import { GET_CART_ITEMS } from './cache/queries/cart'
import { cache } from './cache/cache'

const API_URL = process.env.REACT_APP_API_URL

const client = new ApolloClient({
  cache,
  uri: API_URL,
  resolvers: {
    Mutation: {
      syncCartWithLocalStorage: (_root, _, { cache }): void => {
        const ids = window.localStorage.getItem('cartIDs')
        if (!ids) return
        client.writeData({ data: { cartIDs: JSON.parse(ids) } })
      },
      addToCart: (_root, args, { cache }): void => {
        const { cartIDs } = cache.readQuery({ query: GET_CART_ITEMS })
        const newCartIDs = [...cartIDs, args.id]
        window.localStorage.setItem('cartIDs', JSON.stringify(newCartIDs))
        client.writeData({ data: { cartIDs: newCartIDs } })
      },
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
        client.writeData({ data: { cartIDs: updatedItems } })
      },
      clearCart: (_root, args, { cache }): void => {
        client.writeData({ data: { cartIDs: [] } })
        const savedItems = window.localStorage.getItem('cartIDs')
        if (savedItems) {
          window.localStorage.setItem('cartIDs', JSON.stringify([]))
        }
      },
      updateCartTotalPrice: (_root, args, { cache }): void => {
        console.log(args)
        client.writeData({ data: { cartTotalPrice: args.input } })
      },
      setFetchedCartItems: (_root, args, { cache }): void => {
        console.log(args)
        client.writeData({ data: { cartItems: [] } })
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
