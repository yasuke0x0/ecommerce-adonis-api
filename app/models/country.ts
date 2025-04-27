import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Country extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nameEnglish: string

  @column()
  declare nameFrench: string

  @column()
  declare countryCode: string

  @column()
  declare phoneCode: string

  @column()
  declare isAvailableForShipping: boolean
}
