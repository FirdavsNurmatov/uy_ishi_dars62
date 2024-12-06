import {
    createPostService,
    deletePostByIdService,
    getAllPostsService,
    getPostByIdService,
    updatePostByIdService,
} from '../services/index.js'

export const getAllPostsController = async (req, res, next) => {
    try {
        const posts = await getAllPostsService()

        res.json(posts)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const getPostByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const posts = await getPostByIdService(id)

        res.json(posts)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const createPostController = async (req, res, next) => {
    try {
        const post = await createPostService(req.body)

        res.status(201).json(post)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const updatePostByIdController = async (req, res, next) => {
    try {
        const postId = req.params.id

        const postdata = req.body

        const updated = await updatePostByIdService(postId, postdata)

        if (updated) {
            const updatedPost = await getPostByIdService(postId)

            res.status(200).send(updatedPost)
        } else {
            throw new Error('Post not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deletePostByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const deleted = await deletePostByIdService(id)

        if (deleted) {
            res.status(204).send('Post deleted')
        } else {
            throw new Error('Post not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
