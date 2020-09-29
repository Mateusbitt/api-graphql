import APS from 'apollo-server'
import jwt from 'jsonwebtoken'

const tokenVerifier = (token) => {
  let decoded = false
  if (token) {
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch (e) {
      throw new APS.ApolloError('This is not a valid token!', 'invalid_token')
    }
    if (!decoded.id && !decoded.role) {
      throw new APS.ApolloError('This is not a valid token!', 'invalid_token')
    } else {
      return decoded
    }
  } else {
    return {
      id: null,
      role: '',
    }
  }
}

export { tokenVerifier }
