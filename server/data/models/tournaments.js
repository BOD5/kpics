const tournament = (sequelize, DataTypes) => {
	const Tournament = sequelize.define(
'tournament',
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
		caption: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		prize: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		game: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
		},
		commandSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        // notEmpty: true,
      },
    },
    startDate: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        // notEmpty: true,
        isDate: true
      },
    },
    endDate: {
      type: DataTypes.STRING,
      // allowNull: false,
      validate: {
        // notEmpty: true,
        isDate: true
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