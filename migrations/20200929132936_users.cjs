const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => (

  knex.schema
    .createTable('users', (table) => {
      table.unique('user_id')
      table.string('user_id').notNullable().defaultTo(knex.raw('gen_random_uuid()'))
      table.string('name').notNullable()
      table.string('picture')
      table.string('email').notNullable()
      table.string('username').notNullable()
      table.string('password').notNullable()
      table.string('approval_token').notNullable()
      table.enu('role', ['admin', 'librarian', 'reader']).notNullable().defaultTo('reader')
      table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
      table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
      table.datetime('deleted_at', { precision: 6 })
      table.string('created_by').notNullable()
      table.string('updated_by')
      table.string('deleted_by')
    })
    .then(() => knex.raw(onUpdateTrigger('users')))
)
exports.down = (knex) => knex.schema.dropTable('users')
