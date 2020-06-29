const express = require("express");
const router = express.Router();
const autenticacao = require("../modules/autenticacao");
const conexao = require("../conexao/conexao")
const meusFuncionarios = require("../modules/meusFuncionarios")
const deletarFuncionario = require("../modules/deletarFuncionario");
const cadastrarFuncionario = require("../modules/cadastrarFuncionario")
const buscaAproximada = require("../modules/buscaAproximada")
const cadastrarMaquina = require("../modules/cadastrarMaquina")
const minhasMaquinas = require("../modules/minhasMaquinas")
const cadastrarChatid = require("../modules/cadastrarChatId")

router.get("/home", (req, res) => {
  res.render("index-empresa");
});

router.get("/maquina", (req, res) => {
  res.render("index-maquina");
});

router.get("/cadastrar", (req, res) => {
  return res.render("cadastro-empresa")
});

router.post("/cadastrar", async (req, res) => {
  try {
    let { empresa, cnpj, telefone, email, senha, cep, numero } = req.body;
    let dadosEmpresa = await conexao.sequelize.query("select * from Empresa where email=:email", {
      type: conexao.sequelize.QueryTypes.SELECT,
      replacements: {
        email
      }
    })
    let resposta = empresa == undefined ? false : dadosEmpresa[0];
    if (resposta) {
      res.json(false);
    } else {
      let result = await conexao.sequelize.query("insert into Empresa(empresa, cnpj, telefone, email, senha, cep, numero) values('" + empresa + "','" + cnpj + "','" + telefone + "','" + email + "','" + senha + "','" + cep + "','" + numero + "')")
      res.status(200).send(true);
    }
  } catch (error) {
    res.send(error);
  }
})

router.post("/logar", async (req, res) => {
  try {
    let { email, senha } = req.body;
    console.log(email, senha);
    let resposta = await conexao.sequelize.query("select * from Empresa where email=:email AND senha=:senha", {
      type: conexao.sequelize.QueryTypes.SELECT,
      replacements: {
        email,
        senha
      }
    })
    let empresa = resposta.length == 0 ? false : resposta[0];
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

router.get("/funcionarios/:id", async (req, res) => {
  let { id } = req.params
  todosFuncionarios = await meusFuncionarios(id)
  res.send(todosFuncionarios[0])
});

router.delete("/funcionario/:id", async (req, res) => {
  let idFuncionario = req.params.id
  await deletarFuncionario(idFuncionario);
  return res.send(true);
});

router.post("/funcionario", async (req, res) => {
  let data = req.body
  let resposta = await cadastrarFuncionario(data)
  return res.send(resposta)
});


router.get("/funcionarios", async (req, res) => {
  let { search } = req.query
  let { key } = req.headers
  let resposta = await buscaAproximada(search, key)
  return res.send(resposta)
});

router.post("/maquina", async (req, res) => {
  let data = req.body
  let result = await cadastrarMaquina(data);
  res.send(result)
});

router.post("/minhasMaquinas", async (req, res) => {
  let { fk_empresa } = req.body
  let result = await minhasMaquinas(fk_empresa);
  res.send(result)
});

router.put("/chatId", async (req, res) => {
  let { fk_Empresa, codigoChat } = req.body
  let resposta = await cadastrarChatid(fk_Empresa, codigoChat)
  res.send(resposta)
})

module.exports = router;