const conexao = require("../conexao/conexao");

const deletarMaquina = (idMaquina) => {
  return new Promise(async () => {
    // let resposta = await conexao.sequelize.query("delete from dados where idMaquina=" + idMaquina + "");
    // let resposta = await conexao.sequelize.query("delete from Maquina where idMaquina=" + idMaquina + "");
    // console.log(resposta)
  });
}

module.exports = deletarMaquina;