import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'product_prices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key

      // Price column
      table.float('price').notNullable()

      // Discount type column (Enum-like)
      table.enu('price_discount_type', ['PERCENTAGE', 'FIXED', 'NO_DISCOUNT']).notNullable()

      // Discount value (nullable)
      table.float('price_discount')

      // Foreign key referencing the 'products' table
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .notNullable()

      // Foreign key referencing the 'users' table
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
