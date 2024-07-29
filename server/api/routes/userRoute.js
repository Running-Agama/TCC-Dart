import express from 'express'
import { listUsers, userRegister } from '../controllers/userControllers.js'

const app = express()
const router = express.Router()

router.post('/register', userRegister)
router.get('/listusers/', listUsers)

export default router