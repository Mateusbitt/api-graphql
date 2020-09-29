import APS from 'apollo-server'
import crypto from 'crypto'
import schema from '../../schemas/schema.js'
import { knex, knexnest } from '../../infra/database/postgres.js'
import {
  validation,
  errorHandling,
  createToken,
  checkToken,
  tokenVerifier,
} from './core/index.js'

const server = new APS.ApolloServer({
  schema,
  context: ({ req, connection }) => {
    const token = checkToken(req, connection)
    const user = tokenVerifier(token)
    return (
      {
        user,
        database: { knex, knexnest },
        libs: {
          crypto,
        },
        core: {
          validation,
          errorHandling,
          createToken,
        },
      }
    )
  },
  formatError: (error) => {
    // eslint-disable-next-line no-param-reassign
    delete error.extensions.exception.stacktrace
    const errorlog = {
      message: error.message,
      code: error.extensions.code,
      Detail: error.extensions.exception ? error.extensions.exception : null,
      Path: error.path ? error.path[0] : null,
    }
    console.error('\x1b[31m%s\x1b[0m', `[${'s'}] ERROR: Server: ${JSON.stringify(errorlog)}`)
    return errorlog
  },
})

server.init = () => {
  server.listen(process.env.VIRTUAL_PORT || 3000, '0.0.0.0').then(() => {
    // eslint-disable-next-line no-console
    console.log('\x1b[36m%s\x1b[0m', 'Server started successfully!')
  })
}

export default server
