const conexao = require("../conexao/conexao");

const buscaAproximada = (caracter)=>{
  return new Promise(async (resolve)=>{
    let resposta = await conexao.sequelize.query("select * from funcionario where nome like '%"+caracter+"%'");
    resolve(resposta[0])
  });
}

module.exports = buscaAproximada;

