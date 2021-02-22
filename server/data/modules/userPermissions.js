const userPermissions = (sequelize, DataTypes) => {
  const UP = sequelize.define(
    'userPermissions',
    {
      userId: {
        type: DataTypes.INTEGER,
        // references: {
        // 	model: models.command, // 'Movies' would also work
        // 	key: 'id'
        // }
      },
      permissionId: {
        type: DataTypes.INTEGER,
        // references: {
        // 	model: models.player, // 'Movies' would also work
        // 	key: 'id'
        // }
      }
    }
  );

  return UP;
};

export default userPermissions;