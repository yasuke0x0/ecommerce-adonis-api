import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import User from '#models/user'
import Product from '#models/product'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProductHistory extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare action: 'ARCHIVE' | 'PUBLISH' | 'DELETE' | 'UNPUBLISH'

  @column()
  declare comment?: string | null

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Custom getter to return action label
  get actionLabel() {
    const actionsLabel = {
      ARCHIVE: 'Archiver',
      PUBLISH: 'Publier',
      DELETE: 'Supprimer',
      UNPUBLISH: 'Dépublier',
    }
    return actionsLabel[this.action]
  }
}
