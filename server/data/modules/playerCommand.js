import models from './index.js';
const playerCommand = (sequelize, DataTypes) => {
	const PC = sequelize.define(
		'playerCommand',
		{
			commandId: {
				type: DataTypes.INTEGER,
				// references: {
				// 	model: models.command, // 'Movies' would also work
				// 	key: 'id'
				// }
			},
			playerId: {
				type: DataTypes.INTEGER,
				// references: {
				// 	model: models.player, // 'Movies' would also work
				// 	key: 'id'
				// }
			}
		}
	);

	return PC;
};

export default playerCommand;