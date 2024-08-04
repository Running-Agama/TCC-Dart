import express from 'express'
import { listUsers, loginUser, userRegister } from '../controllers/userControllers.js'

const app = express()
const router = express.Router()

router.post('/register', userRegister)
router.get('/listusers/', listUsers)
router.post('/loginusers', loginUser)

export default router