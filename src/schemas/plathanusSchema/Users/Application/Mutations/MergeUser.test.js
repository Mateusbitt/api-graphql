import crypto from 'crypto'
import MergeUser from './MergeUser.js'
import { validation } from '../../../../../interfaces/http/core/validation.js'

describe('MergeUser Mutation', () => {
  it('will create a user', async () => {
    const params = {
      id: null,
      deleteIt: false,
      userData: {
        name: 'My user',
        picture: 'https://picsum.photos/200/300',
        email: 'breno.mazieiro@gmail.com',
        password: '12345678',
      },
    }
    const ctx = {
      id: null,
      core: {
        validation,
      },
      libs: {
        crypto,
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
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual({ id: '1' })
  })

  it('will update a user', async () => {
    const params = {
      id: '1',
      deleteIt: false,
      userData: {
        name: 'My user edited',
        picture: 'https://picsum.photos/200/400',
        email: 'breno.mazieiro.edited@gmail.com',
        password: '12345678',
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
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual({ id: '1' })
  })

  it('will delete a user', async () => {
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
    const usersMocked = await MergeUser(null, params, ctx)
    expect(usersMocked).toStrictEqual(null)
  })
})
