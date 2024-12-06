import { Comment } from '../models/index.js'

export const getAllCommentsService = async () => {
    try {
        return await Comment.findAll()
    } catch (error) {
        throw error
    }
}

export const getCommentByIdService = async (commentId) => {
    try {
        return await Comment.findOne({ where: { id: commentId } })
    } catch (error) {
        throw error
    }
}

export const createCommentService = async (data) => {
    try {
        return await Comment.create(data)
    } catch (error) {
        throw error
    }
}

export const updateCommentByIdService = async (commentId, commentData) => {
    try {
        return await Comment.update(commentData, { where: { id: commentId } })
    } catch (error) {
        throw error
    }
}

export const deleteCommentByIdService = async (commentId) => {
    try {
        return await Comment.destroy({
            where: { id: commentId },
        })
    } catch (error) {
        throw error
    }
}
