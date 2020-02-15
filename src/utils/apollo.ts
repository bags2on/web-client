import AppoloClient, { Operation } from 'apollo-boost'

export default new AppoloClient({
  uri: 'http://localhost:4000/graphql',
  request: async (operation: Operation) => {
    console.log('request interseptor')
    operation.setContext({
      headers: {
        'X-JWT': localStorage.getItem('token') || ''
      }
    })
  },
  clientState: {
    defaults: {
      auth: {
        __typename: 'Authorization',
        isLoggedIn: Boolean(localStorage.getItem('token'))
      }
    },
    resolvers: {
      Mutation: {
        // parent, args, context
        logIn: (_, { token }, { cache }) => {
          localStorage.setItem('token', token)
          cache.writeData({
            data: {
              __typename: 'Authorization',
              isLoggedIn: true
            }
          })
          return null
        },
        // parent, args, context
        logOut: (_, __, { cache }) => {
          localStorage.removeItem('token')
          cache.writeData({
            data: {
              __typename: 'Authorization',
              isLoggedIn: false
            }
          })
          return null
        }
      }
    }
  }
})
