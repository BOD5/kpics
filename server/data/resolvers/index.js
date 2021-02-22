import merge from 'deepmerge';
// import jwt from 'jsonwebtoken';

import tournamentResolver from '../modules/tournaments/tournamentResolver.js';
import commandResolver from '../modules/commands/commandResover.js';
import playerResolver from '../modules/players/playerResolver.js';
import userResolver from '../modules/users/usersResolver.js';
// import config from '../../config/server.js';


// checkPermission('admin.post-delete', user);
// if (!permissions.includes('admin.user-delete')) {
// 	throw new Error('Don\'t have permissions');
// }
      
// const token = user.replace('Bogdan token: Bearer ', '');

// const jwtData = jwt.verify(token, config.secret);
// console.log(jwtData); // user +

      
const hello = {
  Query: {
    hello: async ( obj, args, { err, check } = {}) => {
      if (err)
        throw new Error(err);
      if (await check('admin.post-delete')){
        return 'Hello';
      }
      else
        throw new Error('access denied');
    },
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