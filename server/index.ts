import nextApp from 'next';
import express, { Request, Response, NextFunction } from 'express';
import { parse } from 'url';
import { join } from 'path';
import get from 'lodash.get';
import compression from 'compression';
import { ApolloServer } from 'apollo-server-express';
import helmet from 'helmet';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';
import config from './config';
import httpRedirect from './lib/http-redirect';

const { IS_PROD, CUSTOM_ENV, PORT } = config;

const nextServer = nextApp({ dev: !IS_PROD });

const handle = nextServer.getRequestHandler();
nextServer.prepare().then(() => {
  const server = express();
  server.enable('trust proxy');
  server.use(helmet());
  if (IS_PROD) {
    // compression should be setup in reverse proxy on the server,
    // it is enabled on local for testing performance
    if (CUSTOM_ENV === 'local') {
      server.use(compression());
    }
    server.use(httpRedirect());

    server.get('/*', (req: Request, res: Response, next: NextFunction) => {
      if (req.headers && req.headers.host && req.headers.host.match && req.headers.host.match(/^www/) !== null) {
        res.redirect(`https://${req.headers.host.replace(/^www\./, '')}${req.url}`);
      }

      next();
    });
  }

  server.use((req: Request, res: Response, next: NextFunction) => {
    const parsedUrl = parse(req.url, true);
    const pathname = get(parsedUrl, 'pathname');
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '../../.next', pathname);

      return nextServer.serveStatic(req, res, filePath);
    }

    return next();
  });

  const graphqlServer = new ApolloServer({
    resolvers,
    typeDefs,
  });

  graphqlServer.applyMiddleware({ app: server });

  server.get('*', (req: Request, res: Response) => handle(req, res));

  server.listen(PORT, () => {
    console.info(`\n App is served at ${PORT}\n`); // eslint-disable-line no-console
  });
});
