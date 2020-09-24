import {
  BookDomain, BookQueries, BookMutations, BookInputs,
} from './Books/Domain/Books.js'

const typeDefs = `

${BookDomain}

type Query {
  ${BookQueries}
}

type Mutation {
  ${BookMutations}
}

${BookInputs}
`

export default typeDefs
