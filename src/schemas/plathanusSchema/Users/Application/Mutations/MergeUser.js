import createUser from '../../Infrastructure/createUser.js'
import updateUser from '../../Infrastructure/updateUser.js'
import deleteUser from '../../Infrastructure/deleteUser.js'

export default (_, { id, deleteIt, userData }, ctx) => {
  if (!deleteIt) {
    return id ? updateUser(ctx, id, userData) : createUser(ctx, userData)
  }
  if (id) {
    return deleteUser(ctx, id)
  }
  return null
}
