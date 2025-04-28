/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

// Controllers
const SessionController = () => import('#controllers/session_controller')
const ProductsController = () => import('#controllers/products_controller')
const UsersController = () => import('#controllers/users_controller')

router
  .group(() => {
    router.get('create', [ProductsController, 'create'])
  })
  .prefix('/api/products')

router
  .get('/product/:id', ({ params }) => {
    return `This is a product with id ${params.id}`
  })
  // Validate id to be numeric + cast to number data type
  .where('id', router.matchers.number())

router
  .post('dashboard', async ({ auth }) => {
    console.log(auth.user) // User
    console.log(auth.authenticatedViaGuard) // 'api'
    console.log(auth.user!.currentAccessToken) // AccessToken
  })
  .use(
    middleware.auth({
      guards: ['api'],
    })
  )

router.post('register', [UsersController, 'register'])
router
  .group(() => {
    router.post('login', [SessionController, 'store'])
    router
      .delete('destroy', [SessionController, 'destroy'])
      .use(middleware.auth({ guards: ['api'] }))
  })
  .prefix('/session')
