import createUser from '../../Infrastructure/createUser.js'
import updateUser from '../../Infrastructure/updateUser.js'
import deleteUser from '../../Infrastructure/deleteUser.js'
import validator from '../_validator/index.js'

export default (_, { id, deleteIt, userData }, ctx) => {
  if (!deleteIt) {
    validator(ctx, userData)
    if (id) {
      return (
        ctx.user.id === id
          ? updateUser(ctx, id, userData)
          : ctx.core.errorHandling('You should not do that!', 'invalid_request')
      )
    }
    return createUser(ctx, userData)
  }
  if (id) {
    return deleteUser(ctx, id)
  }
  return null
}
