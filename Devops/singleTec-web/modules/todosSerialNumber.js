const conexao = require("../conexao/conexao");

const dadosMaquina = (fk_empresa)=>{
  return new Promise(async (resolve)=>{
    let resposta = await conexao.sequelize.query("SELECT serial_Number FROM Maquina WHERE Fk_Empresa = "+fk_empresa+"");
    resolve(resposta[0])
  });
}

module.exports = dadosMaquina;

