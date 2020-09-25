import createBook from '../../Infrastructure/createBook.js'
import updateBook from '../../Infrastructure/updateBook.js'
import deleteBook from '../../Infrastructure/deleteBook.js'

export default (parent, { id, deleteIt, bookData }, ctx) => {
  if (!deleteIt) {
    return id ? updateBook(id, bookData) : createBook(ctx, bookData)
  }
  if (id) {
    return deleteBook(id)
  }
  return null
}
