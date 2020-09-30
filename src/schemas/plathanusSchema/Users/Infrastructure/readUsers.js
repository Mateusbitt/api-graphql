export default (ctx, { id, deleted, pagination }) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.user_id as _id',
      'u.name as _name',
      'u.picture as _picture',
      'u.email as _email',
      'u.username as _username',
      'u.role as _role',
      'u.deleted_at as _isDeleted',
    )
  if (id) {
    sql.where('u.user_id', '=', id)
  }
  if (!deleted) {
    sql.whereNull('u.deleted_at')
  }
  sql.limit(pagination && pagination.limit ? pagination.limit : 100)
  sql.offset(pagination && pagination.offset ? pagination.offset : 0)
  return (
    ctx.database.knexnest(sql).then((data) => data)
  )
}
