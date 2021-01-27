import tournammentResolver from './tournammentResolver.js';
import commandResolver from './commandResover.js';
import playerResolver from './playerResolver.js';
import userResolver from './usersResolver.js';

const hello = {
	Query: {
		hello: () => 'Hello',
	}
};

/*
 * Query: {
 * ...tournammentResolver.Query,
 * ...hello.Query
 * },
 * Mutation: {
 * ...tournammentResolver.Mutation,
 * ...hello.Mutation
 * },
 */

const resolver = {
	...tournammentResolver,
	...commandResolver,
	...playerResolver,
	...userResolver,
	...hello
};

console.log(resolver.Query);

export default resolver;