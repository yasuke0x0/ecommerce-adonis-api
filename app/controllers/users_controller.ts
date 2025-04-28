// import type { HttpContext } from '@adonisjs/core/http'

import { HttpContext } from '@adonisjs/core/http'
import { registerValidator } from '#validators/user'
import User from '#models/user'

export default class UsersController {
  async register({ request }: HttpContext) {
    const payload = await request.validateUsing(registerValidator)

    // Create user
    const user = new User()
    user.firstName = payload.firstName
    user.lastName = payload.lastName
    user.email = payload.email
    user.password = payload.password

    // Insert user to the database
    return await user.save()
  }
}
