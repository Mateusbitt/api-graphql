export const BookDomain = `
type Book {
  id: ID
  name: String!
  year: Int!
  deleted: Boolean
}
`
export const BookQueries = `
Books(
  id: ID
  deleted: Boolean
): [Book]
`
export const BookMutations = `
MergeBook(
  id: ID
  deleteIt: Boolean
  bookData: bookData
) : [Book]
`

export const BookInputs = `
input bookData {
  name: String
  year: Int
}
`
