import readUsers from './readUsers.js'

export default (ctx, id) => (
  ctx.database.knex('users')
    .update({
      deleted_at: ctx.database.knex.fn.now(),
      deleted_by: 'sysAdmin',
    })
    .where('user_id', '=', id)
    .then(() => readUsers(ctx, { id }))
)
