import create from '../../Infrastructure/create.js'
import update from '../../Infrastructure/update.js'
import remove from '../../Infrastructure/remove.js'

export default (parent, { id, deleteIt, bookData }, ctx) => {
  if (!deleteIt) {
    return id ? update(id, bookData) : create(ctx, bookData)
  }
  if (id) {
    return remove(id)
  }
  return null
}
