import readBook from './readBook.js'

export default (ctx, bookData) => (
  ctx.database.knex('books')
    .insert({
      name: bookData.name,
      year: bookData.year,
      created_by: 'anonymous',
      updated_by: 'anonymous',
    }, 'book_id')
    .then((data) => {
      if (!data[0]) return null
      return readBook(ctx, { id: data[0] })
    })
)
