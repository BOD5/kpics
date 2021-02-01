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
			name: {				
				type: DataTypes.STRING,	
			},
			steam: {
				type: DataTypes.STRING,
			},
			university: {
				type: DataTypes.STRING,
			},
			faculty: {
				type: DataTypes.STRING,
			},
			group: {
				type: DataTypes.STRING,
			},
		}
	);

	Player.assosiate = (models) => {
		player.belongsToMany(models.command, { through: models.playerCommand });
		player.belongsTo(models.user);
	};

	return Player;
};

export default player;