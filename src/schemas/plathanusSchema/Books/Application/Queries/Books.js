import readBook from '../../Infrastructure/readBook.js'

export default (_, { id, deleted }) => readBook(id, deleted)
