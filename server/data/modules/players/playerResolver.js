import models from '../index.js';

export default {
	Query: {
		playerByName: async (parent, args) => {
			return await models.player.findOne({where: { name: args.name }});
		},
	},
	Player: {
		command: async (parent, args) => {
			const data = await models.playerCommand.findAll({where: { playerId: parent.id }});
			const commandIds = data.map(obj => {
				return obj.dataValues.commandId;
			});
			console.log(' - :12 -> commandIds', commandIds ); // eslint-disable-line no-console
			return await models.command.findAll({where: {
				id: { $in: commandIds.commandId }
			}});
		},
	},
	Mutation: {
		createPlayer: async (parent, { input }) => {
			return await models.player.create(input);
		}
	}
};