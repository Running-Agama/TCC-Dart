import express from 'express'

import {createChat, updateChatStatus} from '../controllers/chatController.js'

const router = express.Router()

router.post('/createchat', createChat)
router.post('/updatechatstatus', updateChatStatus)

export default router