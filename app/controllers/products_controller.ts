import { HttpContext } from '@adonisjs/core/http'
import { ProductService } from '#services/product_service'
import { inject } from '@adonisjs/core'
import { createProductValidator } from '#validators/product'

@inject()
export default class ProductsController {
  constructor(
    private productService: ProductService
  ) {}

  async create(ctx: HttpContext) {
    const data = ctx.request.body()
    return await createProductValidator.validate(data)
  }

  async store({ request }: HttpContext) {
    // const data = request.all()
    // const payload = await createPostValidator.validate(data)
    // return payload
  }
}
