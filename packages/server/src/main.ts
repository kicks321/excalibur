import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import os from 'os';
import path from 'path';

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
  httpServer.listen({ port: 4000 }, (): void =>
    console.log(`GraphQL running on http://${os.hostname}:4000`),
  );
};

main();
