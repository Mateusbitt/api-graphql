import books from '../../Infrastructure/books.js'

export default (parent, { id, deleted }, ctx) => {
  if (id) {
    return [books.find((book) => book.id === id && !book.deleted)]
  }
  return books.filter((book) => (deleted ? book : !book.deleted))
}
