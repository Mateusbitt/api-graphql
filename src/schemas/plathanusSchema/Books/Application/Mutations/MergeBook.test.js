import MergeBook from './MergeBook.js'
import { validation } from '../../../../../interfaces/http/core/validation.js'

describe('MergeBook Mutation', () => {
  it('will create a book', async () => {
    const params = {
      id: null,
      deleteIt: false,
      bookData: {
        name: 'My book',
        year: 2020,
      },
    }
    const ctx = {
      id: null,
      core: {
        validation,
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
            }
            ),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    const booksMocked = await MergeBook(null, params, ctx)
    expect(booksMocked).toStrictEqual({ id: '1' })
  })

  it('will update a book', async () => {
    const params = {
      id: '1',
      deleteIt: false,
      bookData: {
        name: 'My book edited',
        year: 2019,
      },
    }
    const ctx = {
      id: null,
      core: {
        validation,
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    const booksMocked = await MergeBook(null, params, ctx)
    expect(booksMocked).toStrictEqual({ id: '1' })
  })

  it('will delete a book', async () => {
    const params = {
      id: '1',
      deleteIt: true,
    }
    const ctx = {
      id: null,
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
            }),
            update: () => ({
              where: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            }),
          }),
        knexnest: () => new Promise((resolve) => { resolve(null) }),
      },
    }
    ctx.database.knex.fn = {
      now: () => {},
    }
    const booksMocked = await MergeBook(null, params, ctx)
    expect(booksMocked).toStrictEqual(null)
  })

  it('should not create a book with invalid data', async () => {
    const params = {
      id: null,
      deleteIt: false,
      bookData: {
        name: 'M',
        year: 2,
      },
    }
    const ctx = {
      id: null,
      core: {
        validation,
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
            }
            ),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    try {
      MergeBook(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('params_arguments_invalid')
    }
  })

  it('should not update a book with invalid data', async () => {
    const params = {
      id: null,
      deleteIt: false,
      bookData: {
        name: 'M',
        year: 2,
      },
    }
    const ctx = {
      id: '01',
      core: {
        validation,
      },
      database: {
        knex: () => (
          {
            insert: () => new Promise((resolve) => { resolve([{ id: '1' }]) }),
            select: () => ({
              whereNull: () => {},
              where: () => {},
            }
            ),
          }),
        knexnest: () => new Promise((resolve) => { resolve({ id: '1' }) }),
      },
    }
    try {
      MergeBook(null, params, ctx)
      throw new Error()
    } catch (error) {
      expect(error).toHaveProperty('extensions')
      expect(error.extensions.code).toBe('params_arguments_invalid')
    }
  })
})
