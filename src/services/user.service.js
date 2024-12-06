import { User } from '../models/index.js'

export const getAllUsersService = async () => {
    try {
        return await User.findAll()
    } catch (error) {
        throw error
    }
}

export const getUserByIdService = async (userId) => {
    try {
        return await User.findOne({ where: { id: userId } })
    } catch (error) {
        throw error
    }
}

export const createUserService = async (data) => {
    try {
        return await User.create(data)
    } catch (error) {
        throw error
    }
}

export const updateUserByIdService = async (userId, userdata) => {
    try {
        return await User.update(userdata, { where: { id: userId } })
    } catch (error) {
        throw error
    }
}

export const deleteUserByIdService = async (userId) => {
    try {
        return await User.destroy({
            where: { id: userId },
        })
    } catch (error) {
        throw error
    }
}
