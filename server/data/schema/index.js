import pkg from 'apollo-server';

const { gql } = pkg;

const gqlSchema = gql`
	scalar  Date {
		date: String
		time: String
	}

	type User {
		email: String!
		password: String!
		login: String!
		role: String!
	}

	type Tournament {
		id: Int!
		title: String!
		caption: String!
		game: String!
		prize: String!
		commandSize: Int
		startDate: String
		endDate: String
		commands: [Command]
	}
	
	type Command {
		id: Int!
		title: String!
		description: String
		tournament: Tournament
		players: [Player]
		capitan: Player
	}

	type Player {
		id: Int
		name: String
		steam: String
		university: String
		faculty: String
		Group: String
		command: [Command]
	}

	type Query {
		tournaments: [Tournament]
		tournamentByTitle(title: String): Tournament
		commandByTitle(title: String): [Command] 
		playerByName(name: String): Player
		hello: String
		getUsersByType(type: String): [User]
	}

	input tournamentInput {
		title: String!
		caption: String!
		game: String!
		prize: String!
		commandSize: Int
		startDate: String
		endDate: String
	}

	input commandInput {
		title: String!
		description: String
		tournamentId: Int!
		userId: Int!
	}

	input playerInput {
		name: String!
		steam: String!
		university: String!
		faculty: String!
		group: String!
		userId: Int!
	}

	input userInput {
		email: String!
		password: String!
		login: String!
	}

	input authorizeInput {
		email: String
		login: String
		password: String!
	}

	type AuthorizeUser {
		user: User!
		token: String!
	}

	type Mutation {
		createTournament(input: tournamentInput!): Tournament!
		createCommand(input: commandInput!): Command!
		createPlayer(input: playerInput!): Player!
		registrateUser(input: userInput!): User!
		authorizeUser(input: authorizeInput!): AuthorizeUser!
		changeRole(id: Int!, role: String!): User
	}
`;

export default gqlSchema;