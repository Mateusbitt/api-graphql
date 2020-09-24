import books from './books.js'

export default (id, bookData) => {
  const actualBook = books.find((book) => book.id === id)
  const restBooks = books.filter((book) => book.id !== id)
  const updateBook = [{
    ...actualBook,
    name: bookData.name || actualBook.name,
    year: bookData.yearn || actualBook.year,
  }]
  books = [...restBooks, ...updateBook]
  return updateBook
}
