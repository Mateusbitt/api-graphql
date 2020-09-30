import Books from './Books.js'

describe('Books Queries', () => {
  it('will fetch for books', async () => {
    const params = {
      id: null,
      deleted: false,
    }
    const ctx = {
      user: {
        id: '1',
        role: 'librarian',
      },
      database: {
        knex: () => ({
          select: () => ({
            whereNull: () => ({}),
            limit: () => ({}),
            offset: () => true,
          }),
        }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    const booksMocked = await Books(null, params, ctx)
    expect(booksMocked).toStrictEqual({ id: '1' })
  })
})
