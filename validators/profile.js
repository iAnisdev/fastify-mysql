
  module.exports  = {
    schema: {
        headers: {
            type: 'object',
            'x-auth-token': { type: 'string' }
        },
        required: ['x-auth-token']
    }
}
