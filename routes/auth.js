const CONNECTION = require('./../config/database')

const signupRequestValidator = require('./../validators/signup')
const loginRequestValidator = require('./../validators/signup')

function authRoutes(fastify, options, done) {
    //user signup
    fastify.post('/signup', signupRequestValidator, (req, reply) => {
        reply.send({
            message: 'signup works'
        })
    })
    //user login
    fastify.post('/login',loginRequestValidator,  (req, reply) => {
        reply.send({
            message: 'login works'
        })
    })
    done()
}

module.exports = authRoutes