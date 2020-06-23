const conexao = require("../conexao/conexao");

const logarFuncionario = (dados) => {
    console.log(dados.email)
    return new Promise(async (resolve, reject) => {
        let resposta = await conexao.sequelize.query("select * from Funcionario where email = '" + dados.email + "' and senha ='" + dados.senha + "' ", {
            type: conexao.sequelize.QueryTypes.SELECT,
            replacements: {
                email: dados.email,
                senha: dados.senha
            }
        })

        let funcionario = resposta.length == 1 ? true : false;

        if (funcionario) {
            resolve(true)
        } else {
            resolve(false)
        }
    });
}



module.exports = logarFuncionario;