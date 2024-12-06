import { Router } from 'express'
import {
    createPostController,
    deletePostByIdController,
    getAllPostsController,
    getPostByIdController,
    updatePostByIdController,
} from '../controllers/index.js'

export const postRouter = Router()

postRouter.get('/', getAllPostsController)
postRouter.get('/:id', getPostByIdController)
postRouter.post('/', createPostController)
postRouter.put('/:id', updatePostByIdController)
postRouter.delete('/:id', deletePostByIdController)
