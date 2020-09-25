const { onUpdateTrigger } = require('./triggers')

exports.up = (knex) => (
  knex.raw('create extension if not exists "pgcrypto"')
    .then(() => (
      knex.schema.createTable('books', (table) => {
        table.unique('books_id')
        table.string('books_id').notNullable().defaultTo(knex.raw('gen_random_uuid()'))
        table.string('name').notNullable()
        table.integer('year').unsigned().notNullable()
        table.datetime('created_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
        table.datetime('updated_at', { precision: 6 }).notNullable().defaultTo(knex.fn.now(6))
        table.datetime('deleted_at', { precision: 6 })
        table.string('created_by').notNullable()
        table.string('updated_by').notNullable()
        table.string('deleted_by')
      }))).then(() => knex.raw(onUpdateTrigger('books')))
)

exports.down = (knex) => knex.dropTable('books')
