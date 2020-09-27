import ApolloServer from 'apollo-server'
import schema from '../../schemas/schema.js'
import { knex, knexnest } from '../../infra/database/postgres.js'

const server = new ApolloServer.ApolloServer({
  schema,
  context: () => (
    {
      id: null,
      database: { knex, knexnest },
      libs: { },
    }
  ),
})

server.init = () => {
  server.listen(process.env.VIRTUAL_PORT || 3000, '0.0.0.0').then(() => {
    // eslint-disable-next-line no-console
    console.log('\x1b[36m%s\x1b[0m', 'Server started successfully!')
  })
}

export default server
