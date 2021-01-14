import pkg from 'apollo-server';
import TypeDefs from './data/schema/index.js';
import Resolvers from './data/resolvers/index.js';

const { ApolloServer } = pkg;

const port = 5000;

const server = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
});

server.listen({ port: port }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}/graphql`);
});