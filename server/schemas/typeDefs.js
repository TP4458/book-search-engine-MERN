const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  } 

  input bookData {}
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type mutation {
    login(email: String!, password: String!): Auth!
    newUser(username: String!, email: String!, password: String!): Auth
    saveBook( input: bookData! ): User
    removeBook(bookId:ID!): User
  }
`;

module.exports = typeDefs;
// creating an object in a database and updating an object in a database often take the same parameters.
// To make your schema simpler, you can use “input types” for this,
// by using the input keyword instead of the type keyword.
