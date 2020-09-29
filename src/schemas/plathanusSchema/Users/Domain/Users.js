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
`

export const UserQueries = `
  Users(
    id: String
    deleted: Boolean
  ): [User]
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
