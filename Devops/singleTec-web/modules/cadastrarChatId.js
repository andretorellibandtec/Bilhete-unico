const conexao = require("../conexao/conexao");

const chatId = (Fk_Empresa, codigoChat) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("select chatId from Empresa where idEmpresa=" + Fk_Empresa + "")
    let id = resposta[0][0].chatId
    if (id == "") {
      let resposta = await conexao.sequelize.query("UPDATE Empresa set chatId = " + codigoChat + " where idEmpresa = " + Fk_Empresa + "")
      resolve(true)
    } else {
      resolve(false)
    }
  });
}

module.exports = chatId;

