import { ApolloServer, gql } from "apollo-server";

import { Resolvers } from "./generated/resolver-types";

const typeDefs = gql`
  type Book {
    title: String!
    author: String
  }

  type Query {
    books: [Book]
  }

  schema {
    query: Query
  }
`;

const BOOK_DATA = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers: Resolvers = {
  Query: {
    books: () => BOOK_DATA,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
