import Router from 'express'
const routeLogin = Router()

import { login } from '../controllers/userController.js'

routeLogin.post('/api/login', login)

export default routeLogin


