import readUsers from './readUsers.js'

export default (ctx, id, userData) => (
  ctx.database.knex('users')
    .update({
      name: userData.name,
      picture: userData.picture,
      email: userData.email,
      username: userData.email ? userData.email.split('@')[0] : undefined,
      password: userData.password,
      role: userData.role,
      updated_by: 'sysadmin',
    })
    .where('user_id', '=', id)
    .then(() => readUsers(ctx, { id }))
)
