const { gql } = require("apollo-server-express");

const schema = gql`
  type Query {
    people(page: Int): Data
    person(name: String): Data
  }

  type Data {
    results: [Person]
    count: Int
  }

  type Person {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }
`;

module.exports = {
  schema,
};
