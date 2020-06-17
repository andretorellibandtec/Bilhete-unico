const express = require("express");
const router = express.Router();
const autenticacao = require("../modules/autenticacao");
const conexao = require("../conexao/conexao")

function validarToken(req, res, next) {
  let {authorization} = req.headers
}

router.get("/home", (req, res) => {
  res.render("index-empresa");
});

router.get("/cadastrar", (req, res) => {
  return res.render("cadastro-empresa")
});

router.post("/cadastrar", async (req, res) => {
  try {
    let {empresa,cnpj,telefone,email,senha,cep,numero} = req.body;
    let dadosEmpresa = await conexao.sequelize.query("select * from Empresa where email=:email",{
      type: conexao.sequelize.QueryTypes.SELECT,
      replacements: {
        email
      }
    })
    let resposta = empresa == undefined ? false : dadosEmpresa[0];
    if (resposta) {
       res.json(false);
    } else {
       let result = await conexao.sequelize.query("insert into Empresa(empresa, cnpj, telefone, email, senha, cep, numero, createAt, updateAt values('"+empresa+"','"+cnpj+"','"+telefone+"','"+email+"','"+senha+"','"+cep+"','"+numero+"','null','null'")
       res.status(200).send(true);
    }
  } catch (error) {
    res.send(error);
  }
})

// router.post("/logar", async (req, res) => {
//   try {
//     let { email, senha } = req.body;
//     let resposta = await tableEmpresa.findOne({
//       where: {
//         email: email,
//         senha: senha
//       }
//     });
//     let empresa = resposta == null ? false : resposta.dataValues;
//     if (empresa) {
//       empresa.senha = undefined;
//       let token = await autenticacao.tokenEmpresa(empresa)
//       return res.send(token);
//     } else {
//       return res.status(401).send({ falha: "Não autorizado" });
//     }
//   } catch (error) {
//     res.send(error);
//   }
// })

module.exports = router;