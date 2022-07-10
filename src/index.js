const { ApolloServer } = require("apollo-server");
const dogs = require("../dogsData");
const typeDefs = require("./schema");

const resolvers = {
  Query: {
    dogs: () => dogs,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is runngin at ${url}`);
});
