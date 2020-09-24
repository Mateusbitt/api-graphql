import GT from 'graphql-tools'
import typeDefs from './plathanusSchema/typeDefs.js'
import resolvers from './plathanusSchema/resolvers.js'

export default GT.makeExecutableSchema({
  typeDefs,
  resolvers,
})
