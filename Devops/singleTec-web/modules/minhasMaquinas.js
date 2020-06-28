const conexao = require("../conexao/conexao");

const minhasMaquinas = (fk_Empresa) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("SELECT * FROM Maquina as maq JOIN Empresa as emp on maq.Fk_Empresa = emp.idEmpresa where maq.Fk_Empresa = " + fk_Empresa + "")
    resolve(resposta[0])
  });
}

module.exports = minhasMaquinas;