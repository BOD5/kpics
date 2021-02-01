import merge from 'deepmerge';

import tournamentResolver from '../modules/tournaments/tournamentResolver.js';
import commandResolver from '../modules/commands/commandResover.js';
import playerResolver from '../modules/players/playerResolver.js';
import userResolver from '../modules/users/usersResolver.js';

const hello = {
	Query: {
		hello: () => 'Hello',
	}
};

const resolver = merge.all([
	tournamentResolver,
	commandResolver,
	playerResolver,
	userResolver,
	hello
]);

console.log(resolver);

export default resolver;