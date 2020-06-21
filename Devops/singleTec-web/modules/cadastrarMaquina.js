const conexao = require("../conexao/conexao");

const cadastrarMaquina = (dados)=>{
  console.log(dados.email)
  return new Promise(async (resolve, reject)=>{
    let resposta = await conexao.sequelize.query("select * from Maquina where serialNumber=:serialNumber",{
      type: conexao.sequelize.QueryTypes.SELECT,
      replacements: {
        serialNumber: dados.serialNumber
      }
    })
    let maquina = resposta.length == 0 ? false : true;
    if(!maquina){
      let resposta = await conexao.sequelize.query("insert into Maquina(modelo, serialNumber, cep, rua, bairro, numero,complemento) values('"+dados.modelo+"','"+dados.serialNumber+"','"+dados.cep+"','"+dados.rua+"','"+dados.bairro+"','"+dados.numero+"',"+dados.complemento+")");
      resolve("Máquina cadastrado com sucesso!")
    }else{
      resolve("Máquina já está cadastrado")
    }
  });
}

module.exports = cadastrarMaquina;