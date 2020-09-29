import Books from './Books/Application/Queries/Books.js'
import MergeBook from './Books/Application/Mutations/MergeBook.js'
import Users from './Users/Application/Queries/Users.js'
import MergeUser from './Users/Application/Mutations/MergeUser.js'

const resolvers = {
  Query: {
    Books,
    Users,
  },
  Mutation: {
    MergeBook,
    MergeUser,
  },
}

export default resolvers
