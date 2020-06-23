const conexao = require("../conexao/conexao")

const logarFuncionario = (dados) => {
    console.log(dados.email)
    return new Promise(async (resolve, reject) => {
        let resposta = await conexao.sequelize.query("select * from Funcionario where email = '" + dados.email + "' and senha ='" + dados.senha + "' ", {
<<<<<<< HEAD
=======

>>>>>>> 90f2bd77c40e6171c20915189f70929a6158ed60
            type: conexao.sequelize.QueryTypes.SELECT,
            replacements: {
                email: dados.email,
                senha: dados.senha
            }


        })

<<<<<<< HEAD
        let funcionario = resposta.length == 1 ? true : false;
=======
        console.log(resposta);

        let logar = resposta.length == 1 ? true : false;
        if (logar) {

            resolve(true);
>>>>>>> 90f2bd77c40e6171c20915189f70929a6158ed60

        if (funcionario) {
            resolve(true)
        } else {
<<<<<<< HEAD
=======

>>>>>>> 90f2bd77c40e6171c20915189f70929a6158ed60
            resolve(false)
        }

    });
}



module.exports = logarFuncionario;