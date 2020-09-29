const booksRules = [
  { key: 'name', test: 'length:2:150' },
  { key: 'year', test: 'length:2:4' },
]

export default (ctx, params) => {
  ctx.core.validation(params, booksRules)
  return true
}
