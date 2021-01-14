const command = (sequelize, DataTypes) => {
	const Command = sequelize.define(
'player',
{
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		Title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
	}
);

	Command.associate = (models) => {
		Command.hasMany(models.player);
		Command.belongsTo(models.tournament);
	};

	return Command;
};

export default command;