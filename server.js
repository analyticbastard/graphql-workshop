const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const port = process.env.PORT || 8080;

const app = express();

const moto = 'May the force be with you';
const character = { name: "Luke Skywalker" };

const schema = new GraphQLSchema({
  // query operations defined
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      // define here a 'moto' operation which will return the moto as a string
      mainMoto: { },
      // define here a 'motoAsObject' operation which will return motoAsObject
      mainCharacter: { }
    }
  })
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port);
console.log(`Server listening at localhost:${port}`);
