
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Reports', {
    reportId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    reportedTo: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    isActedOn: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
    location: {
      type: Sequelize.TEXT,
      allowNull: true,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Reports'),
};
