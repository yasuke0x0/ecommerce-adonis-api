import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_histories'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key for the table

      table.enum('action', ['ARCHIVE', 'PUBLISH', 'DELETE', 'UNPUBLISH']).notNullable()

      table.text('comment')

      table.integer('product_id').unsigned().references('id').inTable('products').notNullable()

      table.integer('user_id').unsigned().references('id').inTable('users').notNullable()

      // Timestamps
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
