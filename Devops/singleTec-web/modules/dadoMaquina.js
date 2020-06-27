const conexao = require("../conexao/conexao");

const dadoMaquina = (serialNumber) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("SELECT TOP 1 * FROM Dados as d JOIN Maquina as a on d.Fk_Maquina = a.idMaquina where a.serial_Number = '" + serialNumber + "' order by d.idDados desc;")
    let maquina = resposta[0].length == 1 ? true : false;
    if (maquina) {
      resolve(resposta[0])
    } else {
      resolve(false)
    }
  });
}



module.exports = dadoMaquina;