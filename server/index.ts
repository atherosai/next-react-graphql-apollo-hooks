import nextApp from 'next';
import express, { Request, Response, NextFunction } from 'express';
import { parse } from "url";
import { join } from "path";
import get from "lodash.get";
import { ApolloServer } from "apollo-server-express";
import helmet from "helmet";
import schema from "./schema";
import config from "./config";
import httpRedirect from "./lib/http-redirect";
import rootStaticFiles from "../config/root-static-files.json";

const { IS_PROD, PORT } = config;

const nextServer = nextApp({ dev: !IS_PROD });

const handle = nextServer.getRequestHandler();

nextServer.prepare().then(() => {
  const server = express();
  server.enable('trust proxy');
  server.use(helmet());
  if (IS_PROD) {
    // compression should be setup in reverse proxy
    // server.use(compression());
    server.use(httpRedirect());
  }

  server.get('/*', (req: Request, res: Response, next: NextFunction) => {
    if (req.headers && req.headers.host && req.headers.host.match && req.headers.host.match(/^www/) !== null) {
      res.redirect(`https://${req.headers.host.replace(/^www\./, '')}${req.url}`);
    }
    next();
  });

  server.use((req: Request, res: Response, next: NextFunction)  => {
    const parsedUrl = parse(req.url, true);
    const pathname = get(parsedUrl, 'pathname')
    if (pathname) {
      if (pathname === '/service-worker.js') {
        const filePath = join(__dirname, '../.next', pathname);
        return nextServer.serveStatic(req, res, filePath);
      }
      if (pathname.indexOf('/.well-known') > -1) {
        const path = join(__dirname, '../public', pathname);
        return nextServer.serveStatic(req, res, path);
      }
      if (rootStaticFiles.indexOf(pathname) > -1) {
        const path = join(__dirname, '../public', pathname);
  
        return nextServer.serveStatic(req, res, path);
      }
    }
  
    return next();
  });

  const graphqlServer = new ApolloServer({
    schema
  });

  graphqlServer.applyMiddleware({ app: server });

  server.get('*', (req: Request, res: Response)  => handle(req, res));

  server.listen(PORT, () => {
    console.info(`\n App is served at ${PORT}\n`); // eslint-disable-line no-console
  });
});
