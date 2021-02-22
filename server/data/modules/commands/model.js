const command = (sequelize, DataTypes) => {
  const Command = sequelize.define(
    'command',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        // 	notEmpty: true,
        // },
      }
    }
  );

  Command.associate = (models) => {
    Command.belongsToMany(models.player, { through: models.playerCommand });
    Command.belongsTo(models.tournament);
    Command.belongsTo(models.user);
  };

  return Command;
};

export default command;