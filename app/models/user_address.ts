import Country from '#models/country'
import { BaseModel, belongsTo, column, computed } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

export default class UserAddress extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare company: string | null

  @column()
  declare firstName: string

  @column()
  declare lastName: string

  @column()
  declare phone: string

  @column()
  declare phoneInternationalCode: string

  @column()
  declare addressLineOne: string

  @column()
  declare addressLineTwo: string | null

  @column()
  declare city: string

  @column()
  declare postalCode: string

  @belongsTo(() => Country)
  declare country: BelongsTo<typeof Country>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  // Computed property for first + last name
  @computed()
  public get firstLastName(): string {
    return `${this.firstName ?? ''} ${this.lastName ?? ''}`.trim()
  }
}
