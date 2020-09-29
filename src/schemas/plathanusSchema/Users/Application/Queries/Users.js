import readUsers from '../../Infrastructure/readUsers.js'

export default (_, { id, deleted }, ctx) => readUsers(ctx, { id, deleted })
