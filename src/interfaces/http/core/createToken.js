import jwt from 'jsonwebtoken'

const createToken = (userData) => {
  const token = (
    jwt
      .sign(
        userData,
        process.env.JWT_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRE_IN },
      )
  )
  return token
}

export { createToken }
