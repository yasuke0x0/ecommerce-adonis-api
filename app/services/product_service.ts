import { HttpContext } from '@adonisjs/core/http'

export class ProductService {
  create(ctx: HttpContext) {
    console.log('Created !')
  }
}
