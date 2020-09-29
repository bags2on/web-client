import { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()
cache.writeData({
  data: {
    cartItems: []
  }
})

const cacheResolvers = {
  addToCart: null
}

export { cache, cacheResolvers }
