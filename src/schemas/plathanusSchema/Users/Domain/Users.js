export const UserDomain = `
  type User {
    id: ID
    name: String
    picture: String
    email: String
    username: String
    isDeleted: Boolean
    role: roleEnum
  }

  enum roleEnum {
    admin
    librarian
    reader
  }

  type UserAuth {
    token: String
  }
`

export const UserQueries = `
  Users(
    id: String
    deleted: Boolean
  ): [User]

  UserLogin(
    username: String!
    password: String!
  ) : UserAuth
`

export const UserMutations = `
MergeUser(
  id: ID
  deleteIt: Boolean
  userData: userData
) : [User]
`
export const UserInputs = `
input userData {
  name: String!
  picture: String
  email: String!
  password: String!
  role: roleEnum
}
`
