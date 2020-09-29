import readUsers from './readUsers.js'

export default (ctx, userData) => (
  ctx.database.knex('users')
    .insert({
      name: userData.name,
      picture: userData.picture,
      email: userData.email,
      username: userData.email.split('@')[0],
      password: ctx.libs.crypto.createHmac('sha256', process.env.HASH_SECRET).update(userData.password).digest('hex'),
      approval_token: '123abc',
      role: 'reader',
      created_by: 'sysadmin',
      updated_by: 'sysadmin',
    }, 'user_id')
    .then((data) => {
      if (!data[0]) return null
      return readUsers(ctx, { id: data[0] })
    })
)
