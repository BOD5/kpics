import models from '../models/index.js';

export default {
	Query: {
		tournamment: async (parent, args, context, info) => {
			console.log('models', models);

			return await models.tournamment.findOne({where: args});
		},
	},
	Tournamment: {
		commands: async (parent, args, context, info) => {
			console.log('models ', models);

			return await models.command.findAll({where: {
				tournammentId: parent.id
				}});
		}
	},
	Mutation: {
		createTournamment: async (parent, { input }, context, info) => {
			console.log('args ', input);

			return await models.tournamment.create(input);
		}
	}
};