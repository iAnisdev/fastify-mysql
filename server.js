const fastify = require('fastify')({ logger: true })


const PORT = 3030

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

const start = async () => {
    try {
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()