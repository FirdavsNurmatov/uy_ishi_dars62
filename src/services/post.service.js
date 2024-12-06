import { Post } from '../models/index.js'

export const getAllPostsService = async () => {
    try {
        return await Post.findAll()
    } catch (error) {
        throw error
    }
}

export const getPostByIdService = async (postId) => {
    try {
        return await Post.findOne({ where: { id: postId } })
    } catch (error) {
        throw error
    }
}

export const createPostService = async (data) => {
    try {
        return await Post.create(data)
    } catch (error) {
        throw error
    }
}

export const updatePostByIdService = async (postId, postdata) => {
    try {
        return await Post.update(postdata, { where: { id: postId } })
    } catch (error) {
        throw error
    }
}

export const deletePostByIdService = async (postId) => {
    try {
        return await Post.destroy({ where: { id: postId } })
    } catch (error) {
        throw error
    }
}
