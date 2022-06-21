import { ApolloServer, gql } from "apollo-server";
import Config from "./config";

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
        title: "Made of Wolves",
        authorId: "1",
      },
      {
        title: "The Visitor in the City",
        authorId: "2",
      },
    ],
  },
  Book: {
    author: (parent: any) => {
      return {
        id: parent.authorId,
        name: parent.authorId == "1" ? "James Carter" : "Arthur Novotic",
      };
    },
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  console.log(Config.port);
  await server.listen(Config.port);
  console.log("🚀 Server started on https://localhost:4000");
};

main();
