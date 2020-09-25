import books from './books.js'

export default (id) => {
  // SoftDelete
  // const actualBook = books.find((book) => book.id === id)
  // const restBooks = books.filter((book) => book.id !== id)
  // const updateBook = [{
  //   ...actualBook,
  //   deleted: true,
  // }]
  // books = [...restBooks, ...updateBook]
  books = [...books.find((book) => book.id === id)]
  return null
}
