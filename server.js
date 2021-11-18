//init dotenv
require('dotenv').config()
const fastify = require('fastify')({ logger: true })

require('./config/database')


//register routes
fastify.register(require('./routes/index'))
fastify.register(require('./routes/auth'))

const PORT = 3030

const start = async () => {
    try {
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()