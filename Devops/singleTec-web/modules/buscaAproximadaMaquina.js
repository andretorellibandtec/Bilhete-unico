const conexao = require("../conexao/conexao");

const buscaAproximadaMaquina = (caracter, fk_empresa) => {
  return new Promise(async (resolve) => {
    fk_empresa = parseInt(fk_empresa)
    let resposta = await conexao.sequelize.query("SELECT * FROM Maquina where serial_Number like '%" + caracter + "%' and  Fk_Empresa = " + fk_empresa + "");
    resolve(resposta[0])
  });
}

module.exports = buscaAproximadaMaquina;

