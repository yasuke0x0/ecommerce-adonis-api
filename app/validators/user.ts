import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    email: vine.string().email().unique({ table: 'users', column: 'email' }),
    firstName: vine.string(),
    lastName: vine.string(),
    password: vine.string().minLength(6).confirmed(),
  })
)
