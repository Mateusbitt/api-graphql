import readUsers from '../../Infrastructure/readUsers.js'

export default (_, parms, ctx) => readUsers(ctx, parms)
