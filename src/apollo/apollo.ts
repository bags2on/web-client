import { ApolloClient } from '@apollo/client'
import { cache } from './cache/cache'

const API_GRAPHQL = process.env.REACT_APP_API_URL + '/graphql'
const withDevTools = process.env.NODE_ENV === 'development'

const client = new ApolloClient({
  uri: API_GRAPHQL,
  cache,
  connectToDevTools: withDevTools
})

export default client
