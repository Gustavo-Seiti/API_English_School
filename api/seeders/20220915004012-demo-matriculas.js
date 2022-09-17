'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [{
      status: "confirmado",
      estudante_id: 1,
      turma_id: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "cancelado",
      estudante_id: 2,
      turma_id: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      status: "em atraso",
      estudante_id: 6,
      turma_id: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
