import ApolloServer from 'apollo-server'
import { v4 as uuidv4 } from 'uuid'
import schema from '../../schemas/schema.js'

const server = new ApolloServer.ApolloServer({
  schema,
  context: () => ({ id: null, libs: { uuidv4 } }),
})

server.init = () => {
  server.listen(3000, '0.0.0.0').then(() => {
    console.log('\x1b[36m%s\x1b[0m', 'Server started successfully!')
  })
}

export default server
