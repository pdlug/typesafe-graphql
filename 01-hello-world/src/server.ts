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

const BOOK_DATA: Book[] = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers = {
  Query: {
    books: () => BOOK_DATA,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
