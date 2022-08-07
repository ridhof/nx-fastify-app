import { FastifyPluginAsync } from 'fastify';

export const routes: FastifyPluginAsync = async (
  fastify,
  opt
): Promise<void> => {
  fastify.get('/', (_, reply) => {
    return reply.code(200).send('Welcome to API');
  });
};
