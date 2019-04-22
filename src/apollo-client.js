import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { ApolloLink, concat } from 'apollo-link'

const httpLink = createHttpLink({
  uri: 'http://localhost:4040',
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken')
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  })

  return forward(operation)
})

const link = concat(authMiddleware, httpLink)
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({ link, cache })

export default apolloClient
