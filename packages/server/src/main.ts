import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import os from 'os';
import path from 'path';
import Config from './config/index';

const typeDefs = gql`
  type Person {
    id: ID!
    name: String!
  }

  type Book {
    title: String
    author: Person
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => [
      {
        title: 'Made of Wolves',
        authorId: '1',
      },
      {
        title: 'The Visitor in the City',
        authorId: '2',
      },
    ],
  },
  Book: {
    author: (parent: { authorId: string | number }) => {
      return {
        id: parent.authorId,
        name: parent.authorId == '1' ? 'James Carter' : 'Arthur Novotic',
      };
    },
  },
};

const main = async () => {
  // Express
  const app = express();
  app.use(cors());
  app.use(compression());
  app.use(express.static(path.join(__dirname, '..', '..', 'frontend/dist')));

  app.get('/healthcheck', (req, res) => {
    return res.json({
      status: 'success',
    });
  });

  app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
  });

  // Http
  const httpServer = createServer(app);

  // Apollo
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(7)],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  // Required to start before applying middleware
  await server.start();

  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  // Start the HttpServer
  httpServer.listen({ port: Config.port }, (): void =>
    console.log(`GraphQL running on http://${os.hostname}:${Config.port}`),
  );
};

main();
