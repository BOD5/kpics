export default {
	Query: {
		player: async (parent, args, { models }) => {
			return await models.player.findOne({where: args});
		},
	},
	Player: {
		command: async (parent, args, { models }) => {
			return await models.command.findAll({where: {
				Id: parent.commandId
				}});
		},
	},
	Mutation: {
		createPlayer: async (parent, args, { models }) => {
			return await models.player.create(args);
		}
	}
};