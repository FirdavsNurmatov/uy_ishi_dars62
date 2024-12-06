import { Router } from 'express'
import {
    createCommentController,
    deleteCommentByIdController,
    getAllCommentsController,
    getCommentByIdController,
    updateCommentByIdController,
} from '../controllers/index.js'

export const commentRouter = Router()

commentRouter.get('/', getAllCommentsController)
commentRouter.get('/:id', getCommentByIdController)
commentRouter.post('/', createCommentController)
commentRouter.put('/:id', updateCommentByIdController)
commentRouter.delete('/:id', deleteCommentByIdController)
