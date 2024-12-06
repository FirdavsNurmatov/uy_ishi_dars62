import {
    createCommentService,
    deleteCommentByIdService,
    getAllCommentsService,
    getCommentByIdService,
    updateCommentByIdService,
} from '../services/index.js'

export const getAllCommentsController = async (req, res, next) => {
    try {
        const comments = await getAllCommentsService()

        res.json(comments)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const getCommentByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const comments = await getCommentByIdService(id)

        res.json(comments)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const createCommentController = async (req, res, next) => {
    try {
        const comment = await createCommentService(req.body)

        res.status(201).json(comment)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const updateCommentByIdController = async (req, res, next) => {
    try {
        const commentId = req.params.id

        const commentData = req.body

        const updated = await updateCommentByIdService(commentId, commentData)

        if (updated) {
            const updatedComment = await getCommentByIdService(commentId)
            res.status(200).send(updatedComment)
        } else {
            throw new Error('Comment not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteCommentByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const deleted = await deleteCommentByIdService(id)

        if (deleted) {
            res.status(204).send('Comment deleted')
        } else {
            throw new Error('Comment not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
