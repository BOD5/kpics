import models from '../index.js';

export default {
  Query: {
    tournamentByTitle: async (parent, args) => {

      return await models.tournament.findOne({where: {title: args.title}});
    },
    tournaments: async () => {

      return await models.tournament.findAll();
    }
  },
  Tournament: {
    commands: async (parent) => {

      return await models.command.findAll({where: {
        tournamentId: parent.id
      }});
    }
  },
  Mutation: {
    createTournament: async (parent, { input }, { err, check } ={}) => {
      if (err) throw new Error(err);
      if (await check('admin.tournament-create')){
        try {
          const data = {
            ...input,
            startDate: new Date(input.startDate).toDateString(),
            endDate: new Date(input.endDate).toDateString(),
          };

          return await models.tournament.create(data);
        } catch (err) {
          console.log(' - err:35 >', err); // eslint-disable-line no-console
          throw new Error('Something went wrong: ', err);
        }
      }
      else throw new Error('Access denied');
    }
  }
};