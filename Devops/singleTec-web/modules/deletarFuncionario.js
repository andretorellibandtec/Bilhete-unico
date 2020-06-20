const conexao = require("../conexao/conexao");

const deletarFuncionario = (id)=>{
  return new Promise(async ()=>{
    let resposta = await conexao.sequelize.query("delete Funcionario where idFuncionario=:id",{
      type: conexao.sequelize.QueryTypes.Integer,
      replacements: {
        id
      }
    });
  });
}

module.exports = deletarFuncionario;