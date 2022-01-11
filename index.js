const fastify = require('fastify')({ logger: true })
const fastifyStatic = require('fastify-static')
const path = require('path')

var server_port = process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

fastify.register(require('fastify-multipart'))
fastify.register(require('fastify-formbody'))

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public')
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'scripts'),
  prefix: '/scripts/',
  decorateReply: false
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'data'),
  prefix: '/data/',
  decorateReply: false
})

const start = async () => {
  try {
    await fastify.listen(server_port,server_host)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
