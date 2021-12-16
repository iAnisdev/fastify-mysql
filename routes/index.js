function indexRoutes (fastify , options , done){
    fastify.get('/' , (req , reply) =>{
        reply.send({
            message: 'API is up and running '
        })
    })
    done()
}

module.exports = indexRoutes