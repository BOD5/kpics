const permission = (seqelize, DataTypes) => {
  const Permission = seqelize.define(
    'permission',
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      permission: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  );
  Permission.associate = (models) => {
    Permission.belongsToMany(models.user, { through: models.userPermissions });
  };

  return Permission;
};

export default permission;