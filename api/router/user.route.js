import express from 'express'
import userController from '../controllers/user.controller'

const router = express.Router()

//path,class.method
router.get('/users',userController.getUser)
router.post('/adduser',userController.addUser)

export default router