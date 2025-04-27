import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Product from '#models/product'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class ProductPrice extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare price: number

  @column()
  declare priceDiscountType: 'PERCENTAGE' | 'FIXED' | 'NO_DISCOUNT'

  @column()
  declare priceDiscount?: number | null

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User> // User who sets the price

  @belongsTo(() => Product)
  declare product: BelongsTo<typeof Product>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  // Method to calculate price after discount
  get priceAfterDiscount(): number {
    let finalPrice = this.price
    if (this.priceDiscountType === 'FIXED' && this.priceDiscount) {
      finalPrice -= this.priceDiscount
    }

    if (this.priceDiscountType === 'PERCENTAGE' && this.priceDiscount) {
      finalPrice *= 1 - this.priceDiscount / 100
    }

    return finalPrice
  }
}
