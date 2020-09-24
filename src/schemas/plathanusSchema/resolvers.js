import Books from './Books/Application/Queries/Books.js'
import MergeBook from './Books/Application/Mutations/MergeBook.js'

const resolvers = {
  Query: {
    Books,
  },
  Mutation: {
    MergeBook,
  },
}

export default resolvers
