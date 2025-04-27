import ProductCategory from '#models/product_category'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description?: string | null

  @column()
  declare sku: string

  @column()
  declare status: 'PUBLISHED' | 'NOT_PUBLISHED' | 'ARCHIVED'

  @belongsTo(() => ProductCategory)
  declare category: BelongsTo<typeof ProductCategory>

  @column()
  declare stock: number

  @column()
  declare weightInKg: number

  @column()
  declare thumbnailGoogleCloudStorageBucketName?: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column.dateTime()
  declare deletedAt?: DateTime | null
}
