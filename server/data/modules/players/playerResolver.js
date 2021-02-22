import models from '../index.js';
import pkg from 'sequelize';
const { Op } = pkg;

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
        id: { [Op.or]: commandIds }
      }});
    },
  },
  Mutation: {
    createPlayer: async (parent, { input }, { err, user } = {}) => {
      if (err)
        throw new Error(err);
      if (models.player.findOne({where: {userId: user.id}}))
        return new Error('Player is already created');
      return await models.player.create(input);
    }
  }
};