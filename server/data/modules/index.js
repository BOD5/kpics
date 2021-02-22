import pkg from 'sequelize';
import tournaments from './tournaments/model.js';
import players from './players/model.js';
import commands from './commands/model.js';
import users from './users/model.js';
import playerCommands from './playerCommand.js';
import config from '../../config/sequelize.js';
import permissions from './permisions/model.js';
import userPermissions from './userPermissions.js';

const { Sequelize, DataTypes } = pkg;

const sequelize = new Sequelize(
  config.connection,
  config.user,
  config.userPassword,
  {
    host: config.host,
    dialect: config.dialect
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
  tournament: tournaments(sequelize, DataTypes),
  user: users(sequelize, DataTypes),
  permission: permissions(sequelize, DataTypes),
  userPermissions: userPermissions(sequelize, DataTypes),
  playerCommand: playerCommands(sequelize, DataTypes),
};

Object.keys(models).forEach((key) => {
  console.log('model ', models[key]);
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

sequelize.sync(); // Delete force true

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;