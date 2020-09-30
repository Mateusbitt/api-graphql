import getUserByUsernameAndPassword from '../../Infrastructure/getUserByUsernameAndPassword.js'

export default async (_, { username, password }, ctx) => {
  const hashedPass = ctx.libs.crypto.createHmac('sha256', process.env.HASH_SECRET).update(password).digest('hex')
  const user = await getUserByUsernameAndPassword(ctx, { username, password: hashedPass })
  if (!user.id) {
    ctx.core.errorHandling('Invalid username or password!', 'invalid_username_or_password')
  }
  return { token: ctx.core.createToken(user) }
}
