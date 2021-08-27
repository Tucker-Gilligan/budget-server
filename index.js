const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Budget" type defines the queryable fields for every budget in our data source.
  type Budget {
    item: String
    category: String
    budget: String
    actual: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "budget" query returns an array of zero or more Budgets (defined above).
  type Query {
    budget: [Budget]
  }
`;

const budget = [
  {
    item: 'Gym Membership',
    category: 'Personal Care',
    budget: 0,
    actual: 0
  },
  {
    item: 'Car Payment',
    category: 'Bills',
    budget: 0,
    actual: 0,
  },
  {
    item: 'Groceries',
    category: 'Necessities',
    budget: 0,
    actual: 0,
  },
];

const resolvers = {
  Query: {
    budget: () => budget,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});