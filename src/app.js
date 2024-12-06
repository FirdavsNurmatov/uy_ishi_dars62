import express from 'express'
import { userRouter, postRouter, commentRouter } from './routes/index.js'

const app = express()

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)

export default app
