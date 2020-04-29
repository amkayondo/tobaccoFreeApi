
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    userId: {
      type: Sequelize.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    phoneNumber: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    userPin: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    location: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
