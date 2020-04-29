module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userId: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userPin: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      default: false,
    },
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
