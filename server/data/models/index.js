import pkg from 'sequelize';
import tournamments from './tournaments.js';
import players from './players.js';
import commands from './commands.js';
import users from './users.js';

const { Sequelize, DataTypes } = pkg;

const sequelize = new Sequelize(
	'test',
	'root',
	'1111',
	{
	host: 'localhost',
	dialect: 'mysql'
}
);

console.info('Setup - connecting database');

sequelize.
	authenticate().
	then(() => {
		console.info('INFO - Database connected');
	}).
	catch((err) => {
		console.error(`ERROR - unable to connect to the database ${err}`);
	});

const models = {
	player: players(sequelize, DataTypes),
	command: commands(sequelize, DataTypes),
	tournamment: tournamments(sequelize, DataTypes),
	user: users(sequelize, DataTypes),
};

Object.keys(models).forEach((key) => {
	console.log('model ', models[key]);
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

sequelize.sync({force: true}); // Delete force true

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;