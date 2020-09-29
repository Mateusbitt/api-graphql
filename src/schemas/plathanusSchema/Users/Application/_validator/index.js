const usersRules = [
  { key: 'name', test: 'length:5:150' },
  { key: 'picture', test: 'length:5:150' },
  { key: 'email', test: 'email' },
  { key: 'password', test: 'length:8:15' },
]

export default (ctx, params) => {
  ctx.core.validation(params, usersRules)
  return true
}
