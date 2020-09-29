import Users from './Users.js'

describe('Users Queries', () => {
  it('will fetch for users', async () => {
    const params = {
      id: null,
      deleted: false,
    }
    const ctx = {
      id: null,
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => {},
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    const usersMocked = await Users(null, params, ctx)
    expect(usersMocked).toStrictEqual({ id: '1' })
  })
})
