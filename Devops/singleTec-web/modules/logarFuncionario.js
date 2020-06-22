const conexao = require("../conexao/conexao");

const logarFuncionario = (dados) => {
    console.log(dados.email, dados.senha)
    return new Promise(async (resolve, reject) => {
        let resposta = await conexao.sequelize.query("select * from Funcionario where email=:email, senha=:senha", {
            type: conexao.sequelize.QueryTypes.SELECT,
            replacements: {
                email: dados.email,
                senha: dados.senha
            }
        })
        let empresa = resposta.length == 0 ? false : true;
        if (empresa) {

            resolve("Funcionario logado!")

            console.log(empresa);

        } else {
            resolve("Funcionario não existente!")
        }
    });
}

module.exports = logarFuncionario;