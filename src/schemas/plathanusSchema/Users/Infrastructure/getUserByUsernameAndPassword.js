export default (ctx, { username, password }) => {
  const sql = ctx.database.knex('users as u')
    .select(
      'u.user_id as _id',
      'u.role as _role',
    )
    .whereNull('u.deleted_at')
    .andWhere('u.username', '=', username)
    .andWhere('u.password', '=', password)
  return (
    ctx.database.knexnest(sql).then((data) => (data && data[0] ? data[0] : null))
  )
}
