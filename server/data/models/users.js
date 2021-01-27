const user = (sequelize, DataTypes) => {
	const User = sequelize.define(
'user',
{
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
				notEmpty: true,
				isEmail: true,
      },
		},
		password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
	}
);

User.associate = (models) => {
	User.hasMany(models.command);
};

	return User;
};

export default user;