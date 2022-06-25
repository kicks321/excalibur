import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import compression from 'compression';
import cors from 'cors';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import Config from './config';

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
  const app = express();

  // Middlewares
  app.use(cors());
  app.use(compression());

  const httpServer = createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    validationRules: [depthLimit(7)],
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();

  // Apply express to Apollo server
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  httpServer.listen({ port: Config.port }, (): void =>
    console.log(`🚀 GraphQL is now running on http://localhost:4000/graphql`),
  );
};

main();
