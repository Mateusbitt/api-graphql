import readBook from './readBook.js'

export default (ctx, id, bookData) => (
  ctx.database.knex('books')
    .update({
      name: bookData.name,
      year: bookData.year,
    })
    .where('book_id', '=', id)
    .then(() => readBook(ctx, { id }))
)
