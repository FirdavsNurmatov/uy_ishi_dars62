import { Router } from 'express'
import {
    createUserController,
    deleteUserByIdController,
    getAllUsersController,
    getUserByIdController,
    updateUserByIdController,
} from '../controllers/index.js'

export const userRouter = Router()

userRouter.get('/', getAllUsersController)
userRouter.get('/:id', getUserByIdController)
userRouter.post('/', createUserController)
userRouter.put('/:id', updateUserByIdController)
userRouter.delete('/:id', deleteUserByIdController)
