const { gql } = require("apollo-server");

const typeDefs = gql`
  type Dogs {
    id: ID!
    name: String!
    thumbnail: String
  }

  type Query {
    dogs: [Dogs!]!
  }
`;

module.exports = typeDefs;
