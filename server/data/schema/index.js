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
		userName: String!
		type: String!
		isAuth: Boolean!
	}

	type Tournamment {
		id: Int!
		title: String!
		caption: String!
		game: String!
		prize: String!
		commandSize: Int
		startDate: Date
		endDate: Date
		commands: [Command]
	}
	
	type Command {
		id: Int
		title: String
		registrationDate: Date
		tournamment: Tournamment
		players: [Player]
		capitan: User
	}

	type Player {
		id: Int
		name: String
		steam: String
		university: String
		faculty: String
		Group: String
		command: Command
	}

	type Query {
		tournamment(title: String): Tournamment
		commands(title: String, game: String): [Command]
		player(name: String): Player
		hello: String
		getUsersByType(type: String): [User]
	}

	input tournammentInput {
		title: String!
		caption: String!
		game: String!
		prize: String!
		commandSize: Int
		startDate: Date
		endDate: Date
	}

	input commandInput {
		title: String
		tournammentId: Int
	}

	input playerInput {
		name: String
		steam: String
		university: String
		faculty: String
		Group: String
		commandId: Int
		tournammentId: Int
	}

	input userInput {
		email: String!
		password: String!
		userName: String!
		type: String!
	}

	input authorizeInput {
		login: String!
		password: String!
	}

	type Mutation {
		createTournamment(input: tournammentInput!): Tournamment!
		createCommand(input: commandInput!): Command!
		createPlayer(input: playerInput!): Player!
		registrateUser(input: userInput!): User!
		authorizeUser(input: authorizeInput!): User!
	}
`;

export default gqlSchema;