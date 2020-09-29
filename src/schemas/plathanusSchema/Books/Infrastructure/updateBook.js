import readBook from './readBook.js'

export default (ctx, id, bookData) => (
  ctx.database.knex('books')
    .update({
      name: bookData.name,
      year: bookData.year,
    })
    .where('book_id', '=', id)
    .then(() => readBook(ctx, { id }))
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('updateBook: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
