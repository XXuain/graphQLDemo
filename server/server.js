const { gql } = require('apollo-server'); // parse this schema
// gql is a tag function

// def schema
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;
