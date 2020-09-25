import books from './books.js'

export default (ctx, bookData) => {
  const newBook = { ...bookData, id: ctx.libs.uuidv4(), deleted: false }
  books.push(newBook)
  return [newBook]
}
