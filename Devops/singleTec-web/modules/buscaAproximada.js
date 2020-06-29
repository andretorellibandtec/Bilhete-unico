const conexao = require("../conexao/conexao");

const buscaAproximada = (caracter, fk_empresa) => {
  return new Promise(async (resolve) => {
    fk_empresa = parseInt(fk_empresa)
    let resposta = await conexao.sequelize.query("select * from Funcionario where nome like '%" + caracter + "%' and Fk_Empresa=" + fk_empresa + "");
    resolve(resposta[0])
  });
}

module.exports = buscaAproximada;

