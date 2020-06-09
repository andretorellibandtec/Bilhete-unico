const { sequelize, Sequelize } = require("../conexao/conexao")

let modelFuncionario = sequelize.define('Funcionario', {

    idFuncionario: {
        type: Sequelize.STRING,
        primaryKey: true,

    },
    nome: {
        type: Sequelize.STRING
    },
    cargo: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    },
    contato: {
        type: Sequelize.STRING
    },
    fk_empresa: {
        type: Sequelize.INTEGER,
        foreignKey: idFuncionario
    },
}, { tableName: 'Funcionario' });

module.exports = modelFuncionario;

