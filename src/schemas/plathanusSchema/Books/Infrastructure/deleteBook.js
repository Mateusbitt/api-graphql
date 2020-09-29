import readBook from './readBook.js'

export default (ctx, id) => (
  ctx.database.knex('books')
    .update({
      deleted_at: ctx.database.knex.fn.now(),
      deleted_by: 'anonymous',
    })
    .where('book_id', '=', id)
    .then(() => readBook(ctx, { id }))
    .catch((error) => {
      const errorObj = {
        msg: error.message,
        hint: error.hint,
      }
      ctx.core.errorHandling('deleteBook: There was a error in the database!', 'database_error', errorObj)
      return null
    })
)
