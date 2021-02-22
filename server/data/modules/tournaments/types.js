import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

const TournamentType = new GraphQLObjectType({
  name: 'tournament',
  description: 'Tournament Type',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    caption: { type: GraphQLString },
    game: { type: GraphQLString },
    prize: { type: GraphQLString },
    commndSize: { type: GraphQLInt },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
});

const TournamentTypesType = new GraphQLObjectType({
  name: 'tournamentTypesType',
  description: 'User Types Type',

  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString }
  })
});

export { TournamentType, TournamentTypesType };