import express from 'express';
import { ApolloServer } from "apollo-server-express";
import helmet from "helmet";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/typeDefs";
import config from "./config";
import httpRedirect from "./lib/http-redirect";

const { IS_PROD, API_PORT } = config;

const server = express()

server.use(helmet());

if (IS_PROD) {
  server.use(httpRedirect());
}

const graphqlServer = new ApolloServer({
  resolvers,
  typeDefs,
})

graphqlServer.applyMiddleware({ app: server });

server.listen(API_PORT, () => {
  console.info(`\n App is served at ${API_PORT}\n`); // eslint-disable-line no-console
});
