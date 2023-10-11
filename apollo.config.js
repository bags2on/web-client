module.exports = {
  client: {
    includes: ['./src/graphql/**/*.gql'],
    service: {
      name: 'b2 api',
      url: 'http://localhost:8080/graphql'
    }
  }
}
