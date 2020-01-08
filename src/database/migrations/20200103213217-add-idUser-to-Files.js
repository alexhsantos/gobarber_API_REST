module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('files', 'id_user', {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: true,
    }),

  down: queryInterface => queryInterface.removeColumn('files', 'id_user'),
};
