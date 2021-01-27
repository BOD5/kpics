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
		capitan: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		}
	}
);

	Command.associate = (models) => {
		Command.hasMany(models.player);
		Command.belongsTo(models.tournamment);
		Command.belongsTo(models.user);
	};

	return Command;
};

export default command;