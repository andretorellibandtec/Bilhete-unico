const conexao = require("../conexao/conexao")

const funcionarios = (id)=>{
  return new Promise(async (resolve,reject)=>{
    try {
      let resposta = await conexao.sequelize.query("select fu.nome, fu.cargo, fu.tipo, fu.email, fu.idFuncionario from Funcionario as fu join Empresa as emp on emp.idEmpresa=fu.Fk_Empresa where emp.idEmpresa=:id",{
        type: conexao.sequelize.QueryTypes.Integer,
        replacements: {
          id
        }
      });
      resolve(resposta)
    } catch (error) {
      reject(error)
    }
  });
}

module.exports = funcionarios

