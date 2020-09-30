import crypto from 'crypto'
import UserLogin from './UserLogin.js'
import { errorHandling } from '../../../../../interfaces/http/core/errorHandling.js'

describe('User Login', () => {
  it('will login a user', async () => {
    const params = {
      username: 'someuser',
      password: 'somepass',
    }
    const ctx = {
      id: null,
      core: {
        createToken: () => 'abc',
      },
      libs: {
        crypto,
      },
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => ({
              andWhere: () => ({
                andWhere: () => true,
              }),
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    const userLoginMocked = await UserLogin(null, params, ctx)

    expect(userLoginMocked).toMatchObject({ token: 'abc' }) // Success!
  })

  it('will not login a user with invalid credentials', async () => {
    const params = {
      username: 'someuser',
      password: 'somepass',
    }
    const ctx = {
      id: null,
      core: {
        createToken: () => 'abc',
        errorHandling,
      },
      libs: {
        crypto,
      },
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => ({
              andWhere: () => ({
                andWhere: () => { },
              }),
            }),
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({}) }),
      },
    }
    try {
      await UserLogin(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('invalid_username_or_password')
    }
  })
})
