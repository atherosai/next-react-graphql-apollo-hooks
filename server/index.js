const nextApp = require('next');
const express = require('express');
const { parse } = require('url');
const { join } = require('path');
const compression = require('compression');
const { ApolloServer } = require('apollo-server-express');
const helmet = require('helmet');
const { IS_PROD, PORT, HOST } = require('./config');
const schema = require('./schema');
const httpRedirect = require('./lib/http-redirect');
const rootStaticFiles = require('../config/root-static-files.json');

const nextServer = nextApp({ dev: !IS_PROD });

const handle = nextServer.getRequestHandler();

nextServer.prepare().then(() => {
  const server = express();
  server.enable('trust proxy');
  server.use(helmet());
  if (IS_PROD) {
    server.use(compression());
    server.use(httpRedirect());
  }

  server.get('/*', (req, res, next) => {
    if (req.headers.host.match(/^www/) !== null) {
      res.redirect(`https://${req.headers.host.replace(/^www\./, '')}${req.url}`);
    }
    next();
  });

  server.use((req, res, next) => {
    const parsedUrl = parse(req.url, true);
    if (parsedUrl.pathname === '/service-worker.js') {
      const filePath = join(__dirname, '../.next', parsedUrl.pathname);
      return nextServer.serveStatic(req, res, filePath);
    }
    if (parsedUrl.pathname.indexOf('/.well-known') > -1) {
      const path = join(__dirname, '../static', parsedUrl.pathname);
      return nextServer.serveStatic(req, res, path);
    }

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const path = join(__dirname, '../static', parsedUrl.pathname);

      return nextServer.serveStatic(req, res, path);
    }
    return next();
  });

  const graphqlServer = new ApolloServer({
    schema
  });

  graphqlServer.applyMiddleware({ app: server });

  server.get('*', (req, res) => handle(req, res));

  server.listen(PORT, () => {
    console.info(`\n App is served at ${PORT}\n`); // eslint-disable-line no-console
  });
});
