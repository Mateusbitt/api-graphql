import readBook from '../../Infrastructure/readBook.js'

export default (_, { id, deleted, pagination }, ctx) => {
  if (!ctx.user.id || ctx.user.role !== 'librarian') {
    return ctx.core.errorHandling('You are not allowed to do that!', 'not_allowed')
  }
  return readBook(ctx, { id, deleted, pagination })
}
