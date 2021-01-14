import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
	'test',
	'root',
	'1234',
	{
	host: 'localhost',
	dialect: 'mysql'
}
);

const models = {
	Tournamment: sequelize.import('./tournamments'),
	Player: sequelize.import('./players'),
	Command: sequelize.import('./commands'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;