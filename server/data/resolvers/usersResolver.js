import models from '../models/index.js';

export default {
	Query: {
		getUsersByType: async (parent, args, context, info) => {
			console.log('models', models);

			return await models.user.findAll({where: args});
		},
	},
	Mutation: {
		registrateUser: async (parent, { input }, context, info) => {
			console.log('args ', input);

			return await models.user.create(input);
		},
		authorizeUser: async (parent, { input }, context, info) => {
			console.log('args ', input);

			return await models.user.findOne({where: input});
		}
	}
};