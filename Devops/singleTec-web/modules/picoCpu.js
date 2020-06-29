const conexao = require("../conexao/conexao");

const picoCpu = (Fk_Empresa) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("SELECT TOP 1 d.cpu_Utilizada as cpu, m.serial_Number, d.data_Hora FROM Dados as d JOIN Maquina as m on m.idMaquina = d.Fk_Maquina where m.Fk_Empresa = " + Fk_Empresa + " order by cpu desc")
    resolve(resposta[0])
  });
}




module.exports = picoCpu;