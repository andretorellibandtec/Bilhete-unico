const { sequelize, Sequelize } = require("../conexao/conexao")

let modelEmpresa = sequelize.define('Endereco_Maquina', {
    idEnderecoMaquina: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    Estacao: {
      type: Sequelize.STRING
    },
    Terminal: {
      type: Sequelize.STRING
    },
    DataHora: {
      type: Sequelize.DATE
    },
    
   
  }, { tableName: 'Endereco_Maquina' });
  
  module.exports = modelEndereco_Maquina;




