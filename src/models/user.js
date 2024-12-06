import db from '../db/index.js'
import { Post } from './post.js'
import { DataTypes, Model } from 'sequelize'

export class User extends Model {}

// post
// User.hasMany(Post)
// comment
// User.hasMany(Comment)

User.init(
    {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
    },
    {
        // Other model options go here
        db, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
    },
)
