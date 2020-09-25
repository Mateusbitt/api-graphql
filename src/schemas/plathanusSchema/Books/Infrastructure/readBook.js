import books from './books.js'

export default (id, deleted) => {
  if (id) {
    return [books.find((book) => book.id === id && !book.deleted)]
  }
  return books.filter((book) => (deleted ? book : !book.deleted))
}
