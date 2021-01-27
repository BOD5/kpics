export default {
	Query: {
		command: async (parent, args, { models }) => {
			return await models.command.findOne({where: args});
		},
	},
	Command: {
		players: async (parent, args, { models }) => {
			return await models.players.findAll({where: {
				commandId: parent.id
				}});
		},
		tournamment: async (parent, args, { models }) => {
			return await models.tournamment.findAll({where: {
				id: parent.tournammentId
				}});
		}
	},
	Mutation: {
		createCommand: async (parent, args, { models }) => {
			return await models.command.create(args);
		}
	}
};