export default (ctx, { id, deleted }) => {
  const sql = ctx.database.knex('books as b')
    .select(
      'b.book_id as _id',
      'b.name as _name',
      'b.year as _year',
      'b.deleted_at as _deleted',
    )
  if (id) {
    sql.where('b.book_id', '=', id)
  }
  if (!deleted) {
    sql.whereNull('b.deleted_at')
  }
  return (
    ctx.database.knexnest(sql)
      .then((data) => data)
      .catch((error) => {
        const errorObj = {
          msg: error.message,
          hint: error.hint,
        }
        ctx.core.errorHandling('readBook: There was a error in the database!', 'database_error', errorObj)
        return null
      })
  )
}
