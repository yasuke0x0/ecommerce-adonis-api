import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('company').nullable()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('phone').notNullable()
      table.string('phone_international_code').notNullable()
      table.string('address_line_one').notNullable()
      table.string('address_line_two').nullable()
      table.string('city').notNullable()
      table.string('postal_code').notNullable()

      table.integer('country_id').unsigned().references('id').inTable('countries').notNullable()

      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
