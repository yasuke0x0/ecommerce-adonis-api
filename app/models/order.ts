import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import User from '#models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import UserAddress from '#models/user_address'
import OrderLine from '#models/order_line'
import OrderHistory from '#models/order_history'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare reference: string

  @column()
  declare totalWithoutShippingCost: number

  @column()
  declare shippingCost: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare stripeIntentId: string

  @column()
  declare status:
    | 'requires_payment_method'
    | 'requires_confirmation'
    | 'requires_action'
    | 'processing'
    | 'requires_capture'
    | 'succeeded'
    | 'canceled'
    | 'failed'
    | 'refunded'
    | 'READY_FOR_SHIPPING'
    | 'SHIPPED'

  @column()
  declare affiliationOrCouponDiscountAmount: number

  @column()
  declare affiliationCommissionAmount: number

  // Relationships

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @belongsTo(() => UserAddress)
  declare shippingAddress: BelongsTo<typeof UserAddress>

  @belongsTo(() => UserAddress)
  declare billingAddress: BelongsTo<typeof UserAddress>

  @hasMany(() => OrderLine)
  declare orderLines: HasMany<typeof OrderLine>

  @hasMany(() => OrderHistory)
  declare orderHistories: HasMany<typeof OrderHistory>
}
