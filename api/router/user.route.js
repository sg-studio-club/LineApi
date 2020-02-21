import express from 'express'
import userController from '../controllers/user.controller'

const router = express.Router()

//path,class.method
router.get('/users',userController.getUser)

export default router