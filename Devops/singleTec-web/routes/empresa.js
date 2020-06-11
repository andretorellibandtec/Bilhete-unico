const express = require("express");
const router = express.Router();
const tableEmpresa = require("../tables/empresa");
const tableFuncionario = require("../tables/funcionario");

router.get("/cadastro", (req, res) => {
  res.render("cadastro-empresa");
});

router.post("/cadastrar", async (req, res) => {
  try {
    let data = req.body;
    let cadastro = await tableEmpresa.findAll({
      where: {
        email: data.email
      }
    });
    if (cadastro.length > 0) {
      res.send("Empresa já cadastrada!");
    } else {
      let result = tableEmpresa.create(data);
      res.status(200).send("Empresa cadastrada com sucesso!");
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
    let empresa = resposta;
    if (empresa) {
      return res.send(empresa);
    } else {
      let resposta = await tableFuncionario.findOne({
        where: {
          email: email,
          senha: senha
        }
      });
      if (resposta) {
        return res.send(resposta)
      } else {
        return res.send("Usuario inválido!");
      }
    }

  } catch (error) {
    res.send(error);
  }
})


module.exports = router;