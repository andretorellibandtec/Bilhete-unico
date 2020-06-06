const { sequelize, Sequelize } = require("../conexao/conexao")

let modelEmpresa = sequelize.define('Empresa', {
  idEmpresa: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  empresa: {
    type: Sequelize.STRING
  },
  CNPJ: {
    type: Sequelize.STRING
  },
  Telefone: {
    type: Sequelize.STRING
  },
  Email: {
    type: Sequelize.STRING
  },
  Senha: {
    type: Sequelize.STRING
  },
  CEP: {
    type: Sequelize.STRING
  },
  Numero: {
    type: Sequelize.STRING
  },
}, { tableName: 'empresa' });

module.exports = modelEmpresa;