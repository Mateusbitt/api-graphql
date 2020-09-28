import createBook from '../../Infrastructure/createBook.js'
import updateBook from '../../Infrastructure/updateBook.js'
import deleteBook from '../../Infrastructure/deleteBook.js'
import validator from '../_validator/index.js'

export default (_, { id, deleteIt, bookData }, ctx) => {
  if (!deleteIt) {
    validator(ctx, bookData)
    return id ? updateBook(ctx, id, bookData) : createBook(ctx, bookData)
  }
  if (id) {
    return deleteBook(ctx, id)
  }
  return null
}
