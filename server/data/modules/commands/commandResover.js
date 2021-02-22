import models from '../index.js';
import pkg from 'sequelize';
const { Op } = pkg;

export default {
  Query: {
    commandByTitle: async (parent, args) => {
      return await models.command.findOne({where: args});
    },
  },
  Command: {
    players: async (parent, args) => {
      const data = await models.playerCommand.findAll({where: { commandId: parent.id }});
      const playersIds = data.map(obj => {
        return obj.dataValues.playerId;
      });
      return await models.player.findAll({where: {
        id: { [Op.or]:  playersIds }
      }});
    },
    tournament: async (parent, args) => {
      return await models.tournament.findOne({where: {
        id: parent.tournamentId
      }});
    },
    capitan: async (parent) => {
      return await models.player.findOne({where: {
        userId: parent.userId
      }});
    }
  },
  Mutation: {
    createCommand: async (parent, { input }) => {
      const com = await models.command.create(input);
      const player = await models.player.findOne({where: { userId: com.userId }});
      models.playerCommand.create({ commandId: com.id, playerId: player.id });

      return com;
    }
  }
};