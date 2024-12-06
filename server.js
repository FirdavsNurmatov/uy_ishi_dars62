import app from './src/app.js'
import { config } from 'dotenv'
import { logger } from './src/utils/index.js'

config()

process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err)
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at', promise, 'reason', reason)
    process.exit(1)
})

const bootstrap = async () => {
    try {
        app.listen(process.env.PORT, () => {
            logger.info('Server is runnig on port ' + process.env.PORT)
        })
    } catch (error) {
        logger.error(error)
        process.exit(1)
    }
}

bootstrap()
