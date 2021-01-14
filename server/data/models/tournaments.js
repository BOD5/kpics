const tournament = (sequelize, DataTypes) => {
	const Tournament = sequelize.define(
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
		Caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		Prize: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		Game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		CommandSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    StartDate: {
      type: DataTypes.Date,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    EndDate: {
      type: DataTypes.Date,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
	}
);

	Tournament.associate = (models) => {
		Tournament.hasMany(models.command);
	};

	return Tournament;
};

export default tournament;