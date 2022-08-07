import { buildServer } from './app/app';

const server = buildServer();

server.listen(
  { port: 9000, host: '127.0.0.1' },
  (err, address) => {
    if (err) {
      server.log.error(err);
      process.exit(0);
    }
    server.log.info(`Server listening at ${address}`);
  }
)

