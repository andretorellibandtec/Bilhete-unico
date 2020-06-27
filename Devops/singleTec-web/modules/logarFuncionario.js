const conexao = require("../conexao/conexao");

const logarFuncionario = (dados) => {
    console.log(dados.email)
    return new Promise(async (resolve, reject) => {
        let resposta = await conexao.sequelize.query("select * from Funcionario where email = '" + dados.email + "' and senha ='" + dados.senha + "' ")
        let funcionario = resposta[0].length == 1 ? true : false;
        if (funcionario) {
            resolve(resposta[0])
        } else {
            resolve(false)
        }
    });
}



module.exports = logarFuncionario;