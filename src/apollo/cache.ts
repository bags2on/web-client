import { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()
cache.writeData({
  data: {
    cartItems: [],
    cartTotalPrice: 0
  }
})

const cacheResolvers = {
  addToCart: null
}

export { cache, cacheResolvers }
