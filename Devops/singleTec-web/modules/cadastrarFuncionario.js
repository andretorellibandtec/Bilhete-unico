const conexao = require("../conexao/conexao");

const cadastrarFuncionario = (dados) => {
  return new Promise(async (resolve, reject) => {
    let resposta = await conexao.sequelize.query("select * from Funcionario where email=:email", {
      type: conexao.sequelize.QueryTypes.SELECT,
      replacements: {
        email: dados.email
      }
    })
    let empresa = resposta.length == 0 ? false : true;
    if (!empresa) {
      let resposta = await conexao.sequelize.query("insert into Funcionario(nome, cargo, tipo, email, senha, contato,Fk_Empresa) values('" + dados.nome + "','" + dados.cargo + "','" + dados.tipo + "','" + dados.email + "','" + dados.senha + "','" + dados.contato + "'," + dados.fk_empresa + ")");
      resolve("Funcionario cadastrado com sucesso!")
    
    } else {
      resolve("Funcionario já está cadastrado")
    }
  });
}

module.exports = cadastrarFuncionario;