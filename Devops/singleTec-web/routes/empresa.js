const express = require("express");
const router = express.Router();
const tableEmpresa = require("../tables/empresa");

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
    let resposta = await tableEmpresa.findAll({
      where: {
        email: email,
        senha: senha
      }

    });

    let empresa = resposta[0].dataValues;


    res.send(empresa);


  } catch (error) {
    res.send(error);
  }
})




module.exports = router;