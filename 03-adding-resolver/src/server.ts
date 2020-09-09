import { ApolloServer, gql } from "apollo-server";

import { Resolvers, QueryResolvers } from "./generated/resolver-types";

const typeDefs = gql`
  type Book {
    title: String!
    author: String
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }

  schema {
    query: Query
  }
`;

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const book: QueryResolvers["book"] = (_root, { title }, _ctx) =>
  books.find((b) => b.title === title) ?? null;

const resolvers: Resolvers & { Query: Required<Resolvers["Query"]> } = {
  Query: {
    books: () => books,
    book,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
