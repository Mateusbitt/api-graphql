import readBook from '../../Infrastructure/readBook.js'

export default (_, { id, deleted }, ctx) => readBook(ctx, { id, deleted })
