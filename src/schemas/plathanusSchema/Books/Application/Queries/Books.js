import readBook from '../../Infrastructure/readBook.js'

export default (_, { id, deleted }, ctx) => {
  if (!ctx.user.id) return ctx.core.errorHandling('You are not allowed to do that!', 'not_allowed')
  return readBook(ctx, { id, deleted })
}
