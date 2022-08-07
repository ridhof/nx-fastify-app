import fastify from 'fastify';

import { routes } from './routes';

export function buildServer() {
  const server = fastify({
    logger: true,
  });

  async function closeGracefully(signal: string) {
    server.log.info(`*^!@4=> Received signal to terminate: ${signal}`);

    await server.close();
    process.exit();
  }

  process.on('SIGINT', closeGracefully);
  process.on('SIGTERM', closeGracefully);

  server.register(routes);

  return server;
};
