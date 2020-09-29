import {
  BookDomain, BookQueries, BookMutations, BookInputs,
} from './Books/Domain/Books.js'
import {
  UserDomain, UserQueries, UserMutations, UserInputs,
} from './Users/Domain/Users.js'

const typeDefs = `

${BookDomain}
${UserDomain}

type Query {
  ${BookQueries}
  ${UserQueries}
}

type Mutation {
  ${BookMutations}
  ${UserMutations}
}

${BookInputs}
${UserInputs}
`

export default typeDefs
