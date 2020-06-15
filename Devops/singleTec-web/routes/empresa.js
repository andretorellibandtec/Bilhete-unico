const express = require("express");
const router = express.Router();
const tableEmpresa = require("../tables/empresa");
const tableFuncionario = require("../tables/funcionario");
const autenticacao = require("../modules/autenticacao");

router.get("/home", (req, res) => {
  res.render("index-empresa");
});

router.get("/cadastrar", (req, res) => {
  return res.render("cadastro-empresa")
});

router.post("/cadastrar", async (req, res) => {
  try {
    let data = req.body;
    let empresa = await tableEmpresa.findOne({
      where: {
        email: data.email
      }
    });
    let resposta = empresa == null ? false : empresa.dataValues;
    if (resposta) {
      res.json(false);
    } else {
      let result = tableEmpresa.create(data);
      res.status(200).send(true);
    }
  } catch (error) {
    res.send(error);
  }
})

router.post("/logar", async (req, res) => {
  try {
    let { email, senha } = req.body;
    let resposta = await tableEmpresa.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
    let empresa = resposta == null ? false : resposta.dataValues;
    if (empresa) {
      empresa.senha = undefined;
      let token = await autenticacao.tokenEmpresa(empresa)
      return res.send(token);
    } else {
      return res.status(401).send({ falha: "Não autorizado" });
    }
  } catch (error) {
    res.send(error);
  }
})

router.get("/funcionarios",(req, res) => {
  console.log(req.headers)
});

module.exports = router;