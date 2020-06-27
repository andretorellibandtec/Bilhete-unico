const conexao = require("../conexao/conexao");

const minhasMaquinas = (fk_Empresa) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("Select * From Maquina where Fk_Empresa = " + fk_Empresa + "")
    resolve(resposta[0])
  });
}

module.exports = minhasMaquinas;