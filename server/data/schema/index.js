import pkg from 'apollo-server';

const { gql } = pkg;

const gqlSchema = gql`
	type Date {
		date: String
		time: String
	}

	type Tournamment {
		id: Int
		title: String
		caption: String
		game: String
		prize: String
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
	}

	type Player {
		id: Int
		name: String
		steam: String
		university: String
		faculty: String
		Group: String
		command: Command
		tournamment: Tournamment
	}

	type Query {
		tournamment(title: String): Tournamment
		commands: [Command]
		player(name: String)
		hello: String
	}
`;

export default gqlSchema;