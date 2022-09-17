'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Pessoas', [{
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        role: 'professora',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mateus Cintra',
        ativo: true,
        email: 'mateus@ana.com',
        role: 'aluno',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
