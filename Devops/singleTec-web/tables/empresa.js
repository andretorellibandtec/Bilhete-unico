const { sequelize, Sequelize } = require("../conexao/conexao")

let modelEmpresa = sequelize.define('EMPRESA', {
  idEmpresa: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  empresa: {
    type: Sequelize.STRING
  },
  cnpj: {
    type: Sequelize.STRING
  },
  telefone: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  senha: {
    type: Sequelize.STRING
  },
  cep: {
    type: Sequelize.STRING
  },
  numero: {
    type: Sequelize.STRING
  },
}, { tableName: 'EMPRESA' });

module.exports = modelEmpresa;