import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name').notNullable()
      table.text('description')
      table.string('sku').notNullable()
      table.enum('status', ['PUBLISHED', 'NOT_PUBLISHED', 'ARCHIVED']).notNullable()

      table
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('product_categories')
        .notNullable()

      table.integer('stock').notNullable()
      table.float('weight_in_kg').notNullable()
      table.string('thumbnail_google_cloud_storage_bucket_name')

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.timestamp('deleted_at', { useTz: true })
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
