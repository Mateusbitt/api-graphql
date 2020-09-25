import createBook from '../../Infrastructure/createBook.js'
import updateBook from '../../Infrastructure/updateBook.js'
import deleteBook from '../../Infrastructure/deleteBook.js'

export default (_, { id, deleteIt, bookData }, ctx) => {
  if (!deleteIt) {
    return id ? updateBook(ctx, id, bookData) : createBook(ctx, bookData)
  }
  if (id) {
    return deleteBook(ctx, id)
  }
  return null
}
