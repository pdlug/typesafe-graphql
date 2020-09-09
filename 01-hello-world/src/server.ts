import { ApolloServer, gql } from "apollo-server";

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

type Book = {
  title: string;
  author?: string;
};

const books: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
  {
    author: "None",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
