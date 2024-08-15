import express from 'express'
import { listUsers, loginUser, registerAdmin, userRegister } from '../controllers/userControllers.js'


const router = express.Router()

router.post('/register', userRegister)
router.get('/listusers/', listUsers)
router.post('/login', loginUser)
router.post('/admin', registerAdmin)
export default router