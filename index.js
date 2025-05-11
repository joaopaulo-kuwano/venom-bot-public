// index.js
const fastify = require('fastify')({ logger: true });

// Rota Hello World
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Iniciar o servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();