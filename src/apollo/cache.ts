import { InMemoryCache } from 'apollo-boost'

const cache = new InMemoryCache()
cache.writeData({
  data: {
    cartItems: []
  }
})

const cacheResolvers = {
  addtoCart: null
}

export { cache, cacheResolvers }
