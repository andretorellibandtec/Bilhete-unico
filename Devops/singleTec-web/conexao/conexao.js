const config = require("./config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.development);

sequelize.authenticate().then(() => {
  console.log("Banco de dados conectado com sucesso!");
}).catch((error) => {
  console.error(`Falha ao conectar com o banco de dados: ${error}`);
});

module.exports = {
  Sequelize,
  sequelize
}