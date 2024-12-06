import {
    createUserService,
    deleteUserByIdService,
    getAllUsersService,
    getUserByIdService,
    updateUserByIdService,
} from '../services/index.js'

export const getAllUsersController = async (req, res, next) => {
    try {
        const users = await getAllUsersService()

        res.json(users)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const getUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const users = await getUserByIdController(id)

        res.json(users)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const createUserController = async (req, res, next) => {
    try {
        const user = await createUserService(req.body)
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const updateUserByIdController = async (req, res, next) => {
    try {
        const userId = req.params.id

        const userdata = req.body

        const updated = await updateUserByIdService(userId, userdata)
        if (updated) {
            const updatedUser = await getUserByIdService(userId)

            res.status(200).send(updatedUser)
        } else {
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

export const deleteUserByIdController = async (req, res, next) => {
    try {
        const { id } = req.params

        const deleted = await deleteUserByIdService(id)

        if (deleted) {
            res.status(204).send('User deleted')
        } else {
            throw new Error('User not found')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
