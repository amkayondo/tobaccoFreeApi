
module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define('Reports', {
    reportId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    reportedTo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isActedOn: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  }, {});
  Reports.associate = function (models) {
    // associations can be defined here
  };
  return Reports;
};
