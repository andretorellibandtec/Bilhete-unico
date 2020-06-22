const conexao = require("../conexao/conexao");

const cadastrarMaquina = (dados)=>{
  return new Promise(async (resolve, reject)=>{
    let resposta = await conexao.sequelize.query("select * from Maquina where serial_Number="+dados.serial_Number+"")
    let maquina = resposta[0].length == 0 ? false : true;
    if(!maquina){
      let resposta = await conexao.sequelize.query("insert into Maquina(modelo, serial_Number, cep, rua, numero,bairro,complemento, Fk_Empresa) values('"+dados.modelo+"','"+dados.serial_Number+"','"+dados.cep+"','"+dados.rua+"','"+dados.numero+"','"+dados.bairro+"','"+dados.complemento+"',"+dados.Fk_Empresa+")");
      resolve(true)
    }else{
      resolve(false)
    }
  });
}

module.exports = cadastrarMaquina;