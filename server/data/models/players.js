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
    Steam: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING,
      allowNull: false,
    },
		Name: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.STRING,
      allowNull: false,
		},
		University: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		Faculty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		Group: {
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