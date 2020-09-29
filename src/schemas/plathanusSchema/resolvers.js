import Books from './Books/Application/Queries/Books.js'
import MergeBook from './Books/Application/Mutations/MergeBook.js'
import Users from './Users/Application/Queries/Users.js'
import UserLogin from './Users/Application/Queries/UserLogin.js'
import MergeUser from './Users/Application/Mutations/MergeUser.js'

const resolvers = {
  Query: {
    Books,
    Users,
    UserLogin,
  },
  Mutation: {
    MergeBook,
    MergeUser,
  },
}

export default resolvers
