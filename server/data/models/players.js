// eslint-disable-next-line max-lines-per-function
const player = (sequelize, DataTypes) => {
	const Player = sequelize.define(
'player',
{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
    steam: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING,
      allowNull: false,
    },
		name: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING,
      allowNull: false,
		},
		university: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		faculty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		group: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
	}
);

	Player.assosiate = (models) => {
		player.belongsTo(models.command);
	};

	return Player;
};

export default player;